// // pages/api/dashboard.js

// import { Session } from "express-session";
// import { Passwords } from "../../../server/models" // Import your Sequelize model
// import { NextApiRequest } from "next";
// import { NextApiResponse } from "next";
// import Password from "../../../server/models/Passwords" // Import your Sequelize model;

// export default async function handler(
//   req: any,
//   res: any
// ) {

//   if (!req.session.logged_in) {
//     res.status(401).json({ error: "Unauthorized" });
//     return;
//   }

//   try {
//     const passwordDB = await Passwords.findAll({
//       where: { user_id: req.session.user_id },
//       attributes: [
//         "id",
//         "username",
//         "user_id",
//         "password",
//         "title",
//         "initVector",
//         "securityKey",
//       ],
//     });

//     const password = passwordDB.map((password: Password) =>
//       password.get({ plain: true }),
//     );
//     res.status(200).json({ password, loggedIn: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
