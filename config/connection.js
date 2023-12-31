import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Users from "../models"; // Import your Sequelize model(s)

dotenv.config({ path: "../.env.local" });

let sequelize;

if (process.env.JAWSDB_URL) {
  // If the app is deployed, use the JawsDB connection URL
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // You may need to adjust this based on your PostgreSQL server configuration
      },
    },
  });
} else {
  // If not deployed, use the local connection parameters
  const localOptions = {
    dialect: "postgres", // Change this to "postgres" for PostgreSQL
    host: process.env.POSTGRES_HOST || "",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    username: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DATABASE || "",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // You may need to adjust this based on your PostgreSQL server configuration
      },
    },
    // Add other options as needed
  };

  sequelize = new Sequelize(localOptions);
}

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Sync Sequelize models with the database
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Models synchronized with the database.");
  })
  .catch((err) => {
    console.error("Error syncing models with the database:", err);
    process.exit(1);
  });

export default sequelize;
