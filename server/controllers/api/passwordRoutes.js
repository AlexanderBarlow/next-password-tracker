const router = require('express').Router();
const { User, Passwords } = require('../../models')
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/signup');
        return;
    } else {
        try {
            const passwordData = await Passwords.findAll();
            res.status(200).json(passwordData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
});

router.get('/:id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/');
        return;
    } else {
        try {
            const passwordData = await Passwords.findByPk(req.params.id, {
                include: [{ model: User, through: Passwords, as: 'user_passwords' }]
            });

            if (!passwordData) {
                res.status(404).json({ message: 'No password found with this id.' });
                return;
            }

            res.status(200).json(passwordData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
});

router.delete("/:id", async (req, res) => {
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
    const passwordData = await Passwords.destroy({
      where: {
        id: req.params.id,
        user_id: user_id, // Ensure the user can only delete their own passwords
      },
    });

    if (!passwordData) {
      return res.status(404).json({ error: "No Password found with this id." });
    }

    return res.status(200).json({ message: "Password deleted successfully." });
  } catch (err) {
    console.error("Error during JWT verification:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  console.log("update route");
  console.log(req.params.id);

  try {
    const updatedPassword = await Passwords.update(
      {
        password: req.body.password,
        title: req.body.title,
        username: req.body.username,
      },
      {
        where: {
          id: req.params.id,
        },
        individualHooks: true, // This ensures that only the specified fields are updated
      }
    );

    // updatedPassword is an array with the number of affected rows
    if (updatedPassword[0] > 0) {
      // Sends a success message as a json response
      res.json({ message: "Password updated successfully." });
    } else {
      res.status(404).json({ error: "Password not found." });
    }
  } catch (err) {
    console.error("Error updating password:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;