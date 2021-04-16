//user model/table 
//contains user info

module.exports = function(sequelize, Sequelize) {

    const user = sequelize.define('user', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        
});
};