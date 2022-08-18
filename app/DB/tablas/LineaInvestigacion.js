const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const LineaInvestigacion = sequelize.define('linea_investigacion',{
    id_Apoyo:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    Descripcion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Tipo_Linea: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
    },
    id_Fuente_Financiera: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Cuerpo_Academico: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla LineaInvestigacion.
module.exports = LineaInvestigacion;

