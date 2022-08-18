const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Usuarios = sequelize.define('usuarios', {
    id_Usuarios: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    Nombre: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    ApellidoPaterno: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    ApellidoMaterno: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Fecha_Nacimiento: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    CURP: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_Divisiones: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    nombre_de_usuario: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    contrasena: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_pais: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_estado: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_municipio : {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_cp : {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_colonia : {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    fecha_ingreso_division: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_ingreso_institucion: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    id_instancia_profesor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    id_tipo_contratacion: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    licenciatura_profesor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    localidad_licenciatura: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    especialidad_profesor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    localidad_especialidad: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    maestria_profesor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    localidad_maestria: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    doctorado_profresor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    localidad_doctorado: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    postdoctorado_profesor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    localidad_postdoctorado: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Usuarios.
module.exports = Usuarios;
