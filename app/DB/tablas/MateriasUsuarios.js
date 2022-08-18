const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const MateriaUsuarios = sequelize.define('materia_usuarios',{
    id_materias_usuarios:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: false
    },
    descripcion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_materia: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_periodo: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla MateriaUsuarios.
module.exports = MateriaUsuarios;

