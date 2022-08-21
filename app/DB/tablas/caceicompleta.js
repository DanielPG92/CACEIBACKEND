const { Sequelize } = require('sequelize');
const sequelize = require('../configDB');



const Caceicompleta = sequelize.define('caceicompleta', {
    idProfesor: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Numero_Profesor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    NombreCompleto: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Edad: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Tiempo_de_dicacion: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Estatus_de_contratacion: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Institucion: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    En_el_PE: {
        type: Sequelize.DataTypes.STRING(255),
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
    },
    Mayor_grado_Academico: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Capacitacion_en_docencial: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Actualizacion_disiplinar: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Participacion_en_colegios: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Experiencia_profecional_no_academica: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Experiencia_profecional_en_diseño_ingenieril: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    TSU: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Cursos_Licenciatura: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Curso_Posgrado: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Curso_Eduacion_continua: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Evaluacion_de_los_cursos_impartidos_TSU: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    TSU_ULTIMO: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Cursos_Licenciatura_Ultimo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Curso_Posgrado_Ultimo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Curso_Eduacion_continua_Ultimo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Evaluacion_de_los_cursos_impartidos_TSU_Ultimo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    Periodo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },


}, {
    freezeTableName: true, //Respetar nombre de tabla
    timestamps: false, //Evitar fechas que se pueden genera de más 
})


module.exports = Caceicompleta;