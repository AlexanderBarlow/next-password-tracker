import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import Users from "./User.js"; // Import the User model

class Passwords extends Model {
  // ...
}

Passwords.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    initVector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    securityKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Users, // Reference the User model
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Passwords",
  }
);

export default Passwords;
