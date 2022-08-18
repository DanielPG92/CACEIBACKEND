const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Materias = sequelize.define('materias',{
    id_materias:{
       type: Sequelize.DataTypes.STRING(45),
       primaryKey: true,
       autoincrement: false
    },
    materias: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    descripcion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_grado_division: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    hora_semana: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Materias.
module.exports = Materias;

