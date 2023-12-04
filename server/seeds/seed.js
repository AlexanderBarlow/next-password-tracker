const { User } = require("../models");

const seedUser = [
  {
    user_name: "User",
    user_password: "Password",
  },
];

const seedUsers = () => User.bulkCreate(seedUser);

module.exports = seedUsers;
