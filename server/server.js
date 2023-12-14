const express = require("express");
const sequelize = require("./config/connection");
const seedAll = require("./seeds/seed");
const routes = require("./controllers");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cors = require("cors");

console.log("Server file is running!");

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Update with your frontend URL
  credentials: true,
}));
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "?????????",
  cookie: {
    // Session will automatically expire in 10 minutes
    expires: 100 * 60 * 1000,
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized successfully.");

    // Call the seedAll function here after syncing the database
    seedAll();

    app.listen(PORT, () => console.log(`Now listening: ${PORT}`));
  })
  .catch((error) => {
    console.error("Error during database synchronization:", error);
  });
