//user model/table 
//contains user info

module.exports = function(sequelize, Sequelize) {

    const User = sequelize.define('User', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        
    });
    return User;
};