const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const TipoContratacion = sequelize.define('tipo_contratacion',{
    id_tipo_contratacion:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: false
     },
     descripcion: {
         type: Sequelize.DataTypes.STRING(3),
         allowNull: false
     },
     horas_curso: {
         type: Sequelize.DataTypes.INTEGER,
         allowNull: false
     },
     id_categoria: {
         type: Sequelize.DataTypes.INTEGER,
         allowNull: false
     },
    //  Llamado a la tabla que tiene llave foranea
    id_categoria:{
        type: Sequelize.DataTypes.INTEGER,
     },

 },{
     freezeTableName: true,  //Respetar nombre de tabla
     timestamps: false,      //Evitar fechas que se pueden genera de más 
 })
 
 // Mandar a llamar a la tabla TipoContratacion.
 module.exports = TipoContratacion;