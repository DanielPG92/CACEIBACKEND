const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Periodos = sequelize.define('periodos',{
    id_Periodos:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
     },
     Nombre_Periodo: {
         type: Sequelize.DataTypes.STRING(45),
         allowNull: false
     }
 },{
     freezeTableName: true,  //Respetar nombre de tabla
     timestamps: false,      //Evitar fechas que se pueden genera de más 
 })
 
 // Mandar a llamar a la tabla Categorias.
 module.exports = Periodos;