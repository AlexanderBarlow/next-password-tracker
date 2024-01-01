// // /api/config/index.js
// import sequelize from "../config/connection.js";
// import { Users } from "../../../../models"; // Adjust the path accordingly
// import { Passwords } from "../../../../models"; // Adjust the path accordingly

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(
//       "Connection to the database has been established successfully."
//     );

//     // Explicitly synchronize Sequelize models with the database on server start
//     await Users.sync();
//     await Passwords.sync();
//     console.log("Models synchronized with the database.");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     process.exit(1);
//   }
// })();
// a