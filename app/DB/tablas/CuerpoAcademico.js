const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const CuerpoAcademico = sequelize.define('cuerpo_academico',{
    id_Cuerpo_Academico:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    Descripcion: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla CuerpoAcademico.
module.exports = CuerpoAcademico;

