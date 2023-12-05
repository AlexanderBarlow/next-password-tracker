const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

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
      user_password: req.body.password
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
    console.log("Hitting route: /login")
    console.log(req.body.username.value)
    console.log(req.body.password.value)
  try {
    const userData = await User.findOne({ where: { user_name: req.body.username.value } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.isValidPassword(req.body.password.value);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', requireLogin, (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
