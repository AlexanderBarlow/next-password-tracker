import sequelize from "../config/connection.js";
import seedUsers from "./seed.js";

const seedAll = async () => {
  await sequelize.sync({ force: false });

  await seedUsers();

  process.exit(0);
};

seedAll();
