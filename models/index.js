// Convert CommonJS to ES module
import User from "./User.js";
import Passwords from "./Passwords.js";

User.hasMany(Passwords, {
  foreignKey: "user_id",
});

Passwords.belongsTo(User, {
  foreignKey: "user_id",
});

export { User, Passwords };
