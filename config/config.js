const Sequelize = require('sequelize');
require('dotenv').config();

const dotenv = require('dotenv');
dotenv.config({path: __dirname + '/.env'});
exports.CLOUD_NAME = process.env.CLOUD_NAME || 'cloud-name';
exports.API_KEY = process.env.API_KEY || 'api-key';
exports.API_SECRET = process.env.API_SECRET || 'secret-key';


const sequelize = new Sequelize(
  {
    username: "root",
    password: process.env.PASS,
    database: "users_db",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    use_env_variable: "JAWSDB_URL",

  }
);

module.exports = sequelize;



// require("dotenv").config();

// module.exports = {
//   development: {
//     username: "root",
//     password: process.env.PASS,
//     database: "users_db",
//     host: "127.0.0.1",
//     port: 3306,
//     dialect: "mysql",
//   },
//   test: {
//     username: "root",
//     password: process.env.PASS,
//     database: "users_db",
//     host: "127.0.0.1",
//     port: 3306,
//     dialect: "mysql",
//   },
//   production: {
//     use_env_variable: "JAWSDB_URL",
//     dialect: "mysql",
//   },
// };