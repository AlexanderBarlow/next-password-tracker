const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Passwords } = require("../models");

router.get("/", async (req, res) => {
    try {
    // Fetch all users from the database
    const allUsers = await User.findAll();

    // Respond with the list of users as JSON
    res.status(200).json(allUsers);
    console.log(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.get('/username', (req, res) => {
  res.render('username');
});

router.get('/password', (req, res) => {
  res.render('password');
});

// Login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  } else {
    res.render('login');
  }
});

// sign up input
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  } else {
    res.render('signup');
  }
});

// create user
router.post('/createuser', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }

});

module.exports = router;
