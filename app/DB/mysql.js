const sequelize = require('./configDB.js');
//Mandar a llamar al elemento que contiene las relaciones
const relaciones = require('./relaciones')
const bcrypt = require('bcryptjs');
// Exportacion de tablas
const Apoyo = require('./tablas/Apoyo');
const Estado = require('./tablas/Estado.js');
const Pais = require('./tablas/Pais.js');
const Usuarios = require('./tablas/UsuariosDavid');


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

// Exportación de modulos (2)
//  Get
module.exports.getEstadosAll = this.getEstadosAll
module.exports.getProfesor = getProfesor;

module.exports.init = init;
// Exportación de modulos
module.exports.getApoyo = getApoyo;

//POST
module.exports.postUsuariosDavi = postUsuariosDavi;