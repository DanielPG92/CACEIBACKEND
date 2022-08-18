const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const HorasContratadas = sequelize.define('horas_contratadas',{
    id_horas_contratadas:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
     },
     descripcion: {
         type: Sequelize.DataTypes.STRING(45),
         allowNull: false
     },
     id_tipo_contratacion: {
         type: Sequelize.DataTypes.INTEGER,
         allowNull: false
     }
 },{
     freezeTableName: true,  //Respetar nombre de tabla
     timestamps: false,      //Evitar fechas que se pueden genera de más 
 })
 
 // Mandar a llamar a la tabla HorasContratadas.
 module.exports = HorasContratadas;