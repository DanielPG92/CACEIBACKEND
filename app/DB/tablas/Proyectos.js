const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Proyctos = sequelize.define('proyectos',{
    id_Proyectos:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    Titulo: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
    },
    id_Procedencia: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Apoyo: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_linea_investigacion: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Periodo: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Fecha_Inicio: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    Fecha_Termino: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true
    },
    id_Tipo_Proyecto: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Estatus: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_Usuario_Rol: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Divisiones: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Produccion: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Proyctos.
module.exports = Proyctos;

