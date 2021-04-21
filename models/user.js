//user model/table 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');


class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    apt: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 20],
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
  
);

User.associate = (models) => {
  User.hasMany(models.Posts);
};

module.exports = User;
