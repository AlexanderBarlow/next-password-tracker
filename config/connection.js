// config/database.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "../.env.local" });

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
} else {
  const localOptions = {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST || "",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    username: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DATABASE || "",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  };

  sequelize = new Sequelize(localOptions);
}

console.log("connection established")

export default sequelize;
