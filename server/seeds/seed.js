const { User } = require("../models");

const seedUser = {
  user_name: "Admin",
  user_password: "AdminPassword!",
};

const seedUsers = async () => {
  try {
    const [user, created] = await User.findOrCreate({
      where: seedUser,
    });

    if (created) {
      console.log("User seeded successfully:", user.toJSON());
    } else {
      console.log("User already exists. Skipping seed.");
    }
  } catch (error) {
    console.error("Error during user seeding:", error);
  }
};


module.exports = seedUsers;
