module.exports = function (sequelize, DataTypes) {
    const Posts = sequelize.define("Posts", {
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
    });
  
    Posts.associate = (models) => {
      Posts.belongsTo(models.User, {
          foreignKey: {
              allowNull: false
          },
      });
    };
    return Posts;
  };