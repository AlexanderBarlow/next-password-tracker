// pages/api/users.ts

import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../server/models"; // Adjust the path based on your project structure

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Fetch all users from the database
    const allUsers = await User.findAll();

    // Respond with the list of users as JSON
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
}
