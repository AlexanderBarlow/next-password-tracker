import { Model, DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import bcrypt from "bcrypt";

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, Infinity],
          msg: "Password must be at least 8 characters long",
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      field: "CreatedAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.user_password = await bcrypt.hash(
          newUserData.user_password,
          10
        );
        return;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

export default Users;
