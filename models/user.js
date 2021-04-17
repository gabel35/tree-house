//user model/table 
//contains user info

module.exports = function(sequelize, Sequelize) {

    const User = sequelize.define('User', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6, 20],
            } 
        }            
    });

    User.associate = (models) => {
        User.hasMany(models.Posts);
      };


    return User;
};