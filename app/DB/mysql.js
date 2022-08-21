const sequelize = require('./configDB.js');
//Mandar a llamar al elemento que contiene las relaciones
const relaciones = require('./relaciones')
const bcrypt = require('bcryptjs');
// Exportacion de tablas
const Apoyo = require('./tablas/Apoyo');
const Estado = require('./tablas/Estado.js');
const Pais = require('./tablas/Pais.js');
const Usuarios = require('./tablas/UsuariosDavid');
const Caceicompleta = require('./tablas/caceicompleta');


init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida");

    }).catch(err => {
        console.err("Conexion fallida", err);
    })
}

// Creación de rutas que se utilizaran al exportar tablas
// Como buena practica u opcion se recomienda llamar el elemento igual al tipo de funcion a generar
getApoyo = function(callback) {
    Apoyo.findAll().then(apoyo => callback(apoyo))
}

getProfesor = function(idProfesor, callback) {
    Usuarios.findOne({ where: { idProfesor: idProfesor } }).then(profesor => callback(profesor));
}


//Creación de consultas pais - estado
// Recuperar información (1)

getEstadosAll = function(callback) {


    Estado.findAll({
        include: [
            { model: Pais, attributes: ['Nombre_Pais'] }
        ],
        attributes: ['id_Pais'],
    }).then(EstadoAll => callback(EstadoAll))
}

//POST

postUsuariosDavi = function(request, callback) {
    const salt = bcrypt.genSaltSync();
    pw2 = bcrypt.hashSync(request.Contrasena, salt);
    Usuarios.create({
        NombreCompleto: request.NombreCompleto,
        Contrasena: pw2,
        Edad: request.Edad,
        Licenciatura: request.Licenciatura,
        Nolicenciatura: request.Nolicenciatura,
        Especialidad: request.Especialidad,
        NoEspecialidad: request.NoEspecialidad,
        Maestria: request.Maestria,
        NoMaestria: request.NoMaestria,
        Doctorado: request.Doctorado,
        NoDoctorado: request.NoDoctorado
    }).then(callback(true));

}

postCaceiConsulta = function(req, callback) {
    Caceicompleta.findAll({ where: { Licenciatura: req.Licenciatura, Periodo: req.Periodo } }).then(cacei => callback(cacei));
}


postCacei = function(request, callback) {
    Caceicompleta.create({
        Numero_Profesor: request.Numero_Profesor,
        NombreCompleto: request.NombreCompleto,
        Edad: request.Edad,
        Tiempo_de_dicacion: request.Tiempo_de_dicacion,
        Estatus_de_contratacion: request.Estatus_de_contratacion,
        Institucion: request.Institucion,
        En_el_PE: request.En_el_PE,
        Licenciatura: request.Licenciatura,
        Nolicenciatura: request.Nolicenciatura,
        Especialidad: request.Especialidad,
        NoEspecialidad: request.NoEspecialidad,
        Maestria: request.Maestria,
        NoMaestria: request.NoMaestria,
        Doctorado: request.Doctorado,
        NoDoctorado: request.NoDoctorado,
        Mayor_grado_Academico: request.Mayor_grado_Academico,
        Capacitacion_en_docencial: request.Capacitacion_en_docencial,
        Actualizacion_disiplinar: request.Actualizacion_disiplinar,
        Participacion_en_colegios: request.Participacion_en_colegios,
        Experiencia_profecional_no_academica: request.Experiencia_profecional_no_academica,
        Experiencia_profecional_en_diseño_ingenieril: request.Experiencia_profecional_en_diseño_ingenieril,
        TSU: request.TSU,
        Cursos_Licenciatura: request.Cursos_Licenciatura,
        Curso_Posgrado: request.Curso_Posgrado,
        Curso_Eduacion_continua: request.Curso_Eduacion_continua,
        Evaluacion_de_los_cursos_impartidos_TSU: request.Evaluacion_de_los_cursos_impartidos_TSU,
        TSU_ULTIMO: request.TSU_ULTIMO,
        Cursos_Licenciatura_Ultimo: request.Cursos_Licenciatura_Ultimo,
        Curso_Posgrado_Ultimo: request.Curso_Posgrado_Ultimo,
        Curso_Eduacion_continua_Ultimo: request.Curso_Eduacion_continua_Ultimo,
        Evaluacion_de_los_cursos_impartidos_TSU_Ultimo: request.Evaluacion_de_los_cursos_impartidos_TSU_Ultimo,
        Periodo: request.Periodo
    }).then(callback(true));
}

getUsuariosDaniel = function(callback) {
        Usuarios.findAll({ attributes: ['NombreCompleto', 'Licenciatura', 'Especialidad', 'Maestria', 'Doctorado'] }).then(usuarios => callback(usuarios));
    }
    // Exportación de modulos (2)
    //  Get
module.exports.getEstadosAll = this.getEstadosAll
module.exports.getProfesor = getProfesor;

module.exports.init = init;
// Exportación de modulos
module.exports.getApoyo = getApoyo;

//POST
module.exports.postUsuariosDavi = postUsuariosDavi;
module.exports.postCacei = postCacei;
module.exports.postCaceiConsulta = postCaceiConsulta;
//GET 
module.exports.getUsuariosDaniel = getUsuariosDaniel;