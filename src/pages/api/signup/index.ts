import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../server/models";

// Define the request body type
interface SignupRequestBody {
  userName: string;
  password: string;
}

// Define the response type
interface SignupSuccessResponse {
  message: string;
  user: User; // Adjust the type based on your User model
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupSuccessResponse | { message: string }>,
) {
  if (req.method === "POST") {
    try {
      // Validate the structure of the request body
      if (!isValidSignupRequestBody(req.body)) {
        res.status(400).json({ message: "Invalid request body" });
        return;
      }

      // Destructure the validated request body
      const { userName, password } = req.body

      // Create a new user using the Sequelize model
      const newUser = await User.create({
        username: userName,
        user_password: password,
      });

      // Send a response indicating successful signup
      const response: SignupSuccessResponse = {
        message: "User created successfully",
        user: newUser,
      };
      res.status(201).json(response);
    } catch (error) {
      // Handle any errors that occurred during user creation
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user" });
    }
  } else {
    // Method not allowed
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

// Function to validate the structure of the request body
function isValidSignupRequestBody(body: unknown): body is SignupRequestBody {
  return (
    typeof body === "object" &&
    body !== null &&
    "userName" in body &&
    typeof (body as Record<string, unknown>).userName === "string" &&
    "password" in body &&
    typeof (body as Record<string, unknown>).password === "string"
  );
}
