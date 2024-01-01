import sequelize from "../config/connection.js";
import seedUsers from "./seed.js";

const seedAll = async () => {
  await sequelize.sync({ force: false });

  await seedUsers();

};

export default seedAll;
