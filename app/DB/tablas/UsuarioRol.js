const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const UsuarioRol = sequelize.define('usuario_rol',{
    id_Usuario_Rol:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    id_Usuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Rol: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_grado: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_horas_contratacion: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_contratacion: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla UsuarioRol.
module.exports = UsuarioRol;
