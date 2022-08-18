const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const TipoCurso = sequelize.define('tipo_curso',{
    id_tipo_curso:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
     },
     descripcion: {
         type: Sequelize.DataTypes.STRING(45),
         allowNull: false
     },
     horas_curso: {
         type: Sequelize.DataTypes.INTEGER,
         allowNull: false
     }
 },{
     freezeTableName: true,  //Respetar nombre de tabla
     timestamps: false,      //Evitar fechas que se pueden genera de más 
 })
 
 // Mandar a llamar a la tabla TipoCurso.
 module.exports = TipoCurso;