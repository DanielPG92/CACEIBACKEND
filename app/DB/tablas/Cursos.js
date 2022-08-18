const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Cursos = sequelize.define('cursos',{
    id_curso:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    horas_totales: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_curso: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_usuario_rol: {
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

// Mandar a llamar a la tabla Cursos.
module.exports = Cursos;

