const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function requireLogin(req, res, next) {
  if (!req.session.logged_in) {
    res.status(401).json({ message: 'You must be logged in to access this route' });
  } else {
    next();
  }
}

User.prototype.isValidPassword = async function(password) {
  return bcrypt.compare(password, this.user_password); // assuming 'user_password' is the field name
}

router.get('/', requireLogin, async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
   try {
    const userData = await User.create({
      user_name: req.body.userName,
      user_password: req.body.password,
    });

    req.session.user_id = userData.id;
    req.session.logged_in = true;

    req.session.save(() => {
      const token = jwt.sign(
        {
          user_id: req.session.user_id,
          user_name: req.body.userName, // Include the username
          logged_in: req.session.logged_in,
        },
        '123', // Replace with a strong and secure secret key
        {
          expiresIn: '3h', // Set an expiration time for the token if needed
        }
      );

      // Set the token as a cookie
      res
        .status(200)
        .cookie('sessionToken', token)
        .json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    console.log('Login route hit'); // Log that the route has been hit

    // Log the values of req.body.username and req.body.password
    console.log('Username:', req.body.userName);
    console.log('Password:', req.body.password);

    const userData = await User.findOne({ where: { user_name: req.body.userName } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.isValidPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    console.log('Password:', validPassword);
    console.log('userData:', userData);

    req.session.user_id = userData.id;
    req.session.logged_in = true;

    req.session.save(() => {
      const token = jwt.sign(
        {
          user_id: req.session.user_id,
          user_name: req.body.userName, // Include the username
          logged_in: req.session.logged_in,
        },
        '123', // Replace with a strong and secure secret key
        {
          expiresIn: '3h', // Set an expiration time for the token if needed
        }
      );

      res
        .status(200)
        .cookie('sessionToken', token)
        .json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
