//user model/table 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Posts extends Model {}
Posts.init(
  {
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);
  
Posts.associate = (models) => {
  Posts.belongsTo(models.User, {
      foreignKey: {
          allowNull: false
      },
  });
};

module.exports = Posts