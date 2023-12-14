const router = require('express').Router();
const sequelize = require('../config/connection');
const { Passwords } = require('../models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    try {
        // Get the JWT token from the Authorization header
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Decode the token to get user_id
        const decodedToken = jwt.verify(token, '123'); // Replace 'your-secret-key' with your actual secret key

        // Use the decoded user_id in your query
        const user_id = decodedToken.user_id;

        if (!req.session.logged_in) {
            res.redirect('/');
            return;
        } else {
            Passwords.findAll({
                where: { user_id: user_id },
                attributes: ['id', 'username', 'user_id', 'password', 'title', 'initVector', 'securityKey']
            }).then(passwordDB => {
                const password = passwordDB.map(password => password.get({ plain: true }));
                const loggedIn = req.session.logged_in;
                res.status(200).json({ password });
            }).catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
        }
    } catch (error) {
        console.error('Error decoding JWT token:', error);
        res.status(401).json({ error: 'Unauthorized' });
    }
});

router.get('/new', (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    } else {
        res.render('new');
    }
});

router.get('/update', (req, res) => {
    res.render('update');
});

router.post('/new', async (req, res) => {
    const algorithm = "aes-256-cbc";
    // generate 16 bytes of random data
    const initVector = crypto.randomBytes(16);
    // protected data
    const message = req.body.password;
    // secret key generate 32 bytes of random data
    const securityKey = crypto.randomBytes(32);
    // the cipher function
    const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
    // encrypt the message
    // input encoding
    // output encoding
    let encryptedData = cipher.update(message, "utf-8", "hex");
    encryptedData += cipher.final("hex");

    try {
        const newPassword = await Passwords.create({
            username: req.body.username,
            title: req.body.title,
            password: encryptedData,
            initVector: initVector.toString('hex'),
            securityKey: securityKey.toString('hex'),
            user_id: req.session.user_id,
        });
        // const newPassword = await Passwords.create({
        //   ...req.body,
        //   user_id: req.session.user_id,
        // });

        res.status(200).json(newPassword);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/copy/:id", (req, res) => {
  const sessionToken = req.headers.authorization?.split(" ")[1];

  if (!sessionToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Decode the JWT
    const decodedToken = jwt.verify(sessionToken, "123");

    // Check if the user is logged in
    if (!decodedToken.logged_in) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Now you have access to req.session.user_id
    const user_id = decodedToken.user_id;

    // Continue with your existing logic
    Passwords.findOne({
      where: { user_id: user_id, id: req.params.id },
      attributes: [
        "id",
        "username",
        "user_id",
        "password",
        "title",
        "initVector",
        "securityKey",
      ],
    })
      .then((passwordDB) => {
        if (!passwordDB) {
          // Password not found
          return res.status(404).json({ error: "Password not found" });
        }

        const password = passwordDB.get({ plain: true });
        const securityKey = Buffer.from(password.securityKey, "hex");
        const initVector = Buffer.from(password.initVector, "hex");
        const encryptedData = password.password;
        const algorithm = "aes-256-cbc";

        // The decipher function
        const decipher = crypto.createDecipheriv(
          algorithm,
          securityKey,
          initVector
        );
        let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
        decryptedData += decipher.final("utf8");

        // Send the decrypted data in the response
        res.json({ decryptedData });
      })
      .catch((error) => {
        // Handle any database-related errors
        console.error("Error during database query:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    // Handle JWT verification errors
    console.error("Error during JWT verification:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
});

module.exports = router;