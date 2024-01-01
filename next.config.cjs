// server.js
const express = require("express");
const next = require("next");
const { createServer } = require("http");
const { parse } = require("url");
const sequelize = require("./config/database").default;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Initialize database connection
  sequelize
    .authenticate()
    .then(() => {
      console.log(
        "Connection to the database has been established successfully."
      );

      // Start the Express server only after the database connection is established
      const httpServer = createServer(server);

      httpServer.listen(3000, (err) => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3000");
      });
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
});
