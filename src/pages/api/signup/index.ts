// // pages/api/register.ts

// import { User } from "../../../server/models";
// import bcrypt from "bcrypt";
// import { NextApiRequest, NextApiResponse } from "next";

// interface ExtendedNextApiRequest extends NextApiRequest {
//   session: any; // Adjust the type based on your session configuration
// }

// export default async function handler(
//   req: ExtendedNextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).end(); // Method Not Allowed
//   }

//   const session = req.session;

//   if (session) {
//     return res.status(403).json({ error: "Already logged in." });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     const userData = await User.create({
//       user_name: req.body.userName,
//       user_password: hashedPassword,
//     });

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ error: "Registration failed." });
//   }
// }
