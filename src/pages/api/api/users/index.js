import { Users } from "../../../../../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import session from "express-session";
import { serialize } from "cookie";

// Set up session middleware
const sessionMiddleware = session({
  secret: "123",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3 * 60 * 60 * 1000,
  },
});

export default async function handler(req, res) {
  try {
    // Use session middleware
    await new Promise((resolve, reject) => {
      sessionMiddleware(req, res, (err) => {
        if (err) {
          console.error("Error in session middleware:", err);
          reject(err);
        } else {
          resolve();
        }
      });
    });

    if (req.method === "GET") {
      // Handle GET request
      const userData = await Users.findAll();
      return res.status(200).json(userData);
    } else if (req.method === "POST" && req.query.action === "login") {
      // Handle login
      const body = req.body;
      const userData = await Users.findOne({
        where: { user_name: body.userName },
      });

      if (!userData) {
        return res.status(400).json({
          message: "Incorrect username or password, please try again",
        });
      }

      req.session.user_id = userData.id;
      req.session.user_name = userData.user_name;
      req.session.logged_in = true;

      req.session.save((err) => {
        if (err) {
          console.error("Error saving session:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const token = generateSessionToken(req.session);

        if (!token) {
          console.error("Error generating session token.");
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const cookie = serialize("sessionToken", token, {
          maxAge: 3 * 60 * 60 * 1000,
          secure: process.env.NODE_ENV === "production",
          path: "/",
        });

        res.setHeader("Set-Cookie", cookie);
        return res.status(200).json(userData);
      });
    } else if (req.method === "POST"  && req.query.action === "signup") {
      // Handle other POST requests
      const body = req.body;
      const userData = await Users.create({
        user_name: body.userName,
        user_password: body.password,
      });

      if (!userData || userData instanceof Array || !userData.id) {
        console.error("Invalid user data:", userData);
        return res.status(500).json({ error: "User data is invalid." });
      }

      if (req.session) {
        req.session.user_id = userData.id;
        req.session.user_name = userData.user_name;
        req.session.logged_in = true;

        req.session.save((err) => {
          if (err) {
            console.error("Error saving session:", err);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          const token = generateSessionToken(req.session);

          if (!token) {
            console.error("Error generating session token.");
            return res.status(500).json({ error: "Internal Server Error" });
          }

          const cookie = serialize("sessionToken", token, {
            maxAge: 3 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });

          res.setHeader("Set-Cookie", cookie);
          return res.status(200).json(userData);
        });
      }
    } else if (req.method === "PUT" && req.query.action === "updatep") {
      // Handle password update
      const { id, newPassword } = req.body;

      if (!id || !newPassword) {
        return res.status(400).json({
          error: "Invalid request. Please provide id and newPassword.",
        });
      }

      const user = await Users.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      if (!hashedPassword) {
        console.error("Error hashing password.");
        return res.status(500).json({ error: "Internal Server Error" });
      }

      await user.update({ user_password: hashedPassword });

      return res.json({ message: "Password updated successfully." });
    } else if (req.method === "POST" && req.query.action === "logout") {
      // Handle logout
      req.session.destroy((err) => {
        if (err) {
          console.error("Error destroying session:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(204).end();
      });
    } else {
      // Handle other methods
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    alert("The site is down currently");
    return res.status(500).json({ error: "Internal Server Error" });
    
  }
}

// Function to generate a session token
function generateSessionToken(session) {
  try {
    return jwt.sign(
      {
        user_id: session.user_id,
        user_name: session.user_name,
        logged_in: session.logged_in,
      },
      "123",
      {
        expiresIn: "3h",
      }
    );
  } catch (error) {
    console.error("Error generating session token:", error);
    return null;
  }
}
