// models/index.js

import Users from "./User.js";
import Passwords from "./Passwords.js";

Users.hasMany(Passwords, {
  foreignKey: "user_id",
});

Passwords.belongsTo(Users, {
  foreignKey: "user_id",
});

export { Users, Passwords };
