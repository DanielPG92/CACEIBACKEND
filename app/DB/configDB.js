const Sequelize = require('sequelize')
const sequelize = new Sequelize("cacei", "root", "sasa", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;