import Users from "../models/index.js";
import dotenv from "dotenv";
dotenv.config({path: '../.env.local'});

const seedUser = {
  user_name: process.env.ADMIN_USER,
  user_password: process.env.ADMIN_PW,
};

const seedUsers = async () => {
  try {
    const [user, created] = await Users.findOrCreate({
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

export default seedUsers;
