const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Procedencia = sequelize.define('procedencia',{
    id_Procedencia:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    Institucion_de_procedencia: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Procedencia.
module.exports = Procedencia;

