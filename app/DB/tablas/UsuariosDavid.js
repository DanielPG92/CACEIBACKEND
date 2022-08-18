const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const UsuariosDavid = sequelize.define('usuarios', {
    idProfesor: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreCompleto: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Contrasena: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Edad: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Licenciatura: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Nolicenciatura: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Especialidad: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    NoEspecialidad: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Maestria: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    NoMaestria: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Doctorado: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    NoDoctorado: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    }
}, {
    freezeTableName: true, //Respetar nombre de tabla
    timestamps: false, //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Usuarios.
module.exports = UsuariosDavid;