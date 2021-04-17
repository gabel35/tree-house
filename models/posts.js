module.exports = function (sequelize, Sequelize) {
    const Posts = sequelize.define("Posts", {
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: false,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
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