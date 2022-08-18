const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const GradosAcademicos = sequelize.define('grados_academicos',{
    id_grado:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
     },
     descripcion: {
         type: Sequelize.DataTypes.STRING(3),
         allowNull: false
     }
 },{
     freezeTableName: true,  //Respetar nombre de tabla
     timestamps: false,      //Evitar fechas que se pueden genera de más 
 })
 
 // Mandar a llamar a la tabla GradosAcademicos.
 module.exports = GradosAcademicos;