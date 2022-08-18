const sequelize = require('./configDB.js');
//Mandar a llamar al elemento que contiene las relaciones
const relaciones = require('./relaciones')
// Exportacion de tablas
const Apoyo = require('./tablas/Apoyo');
const Estado = require('./tablas/Estado.js');
const Pais = require('./tablas/Pais.js');


init = function () {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida");
        relaciones();
    }).catch(err => {
        console.err("Conexion fallida", err);
    })
}

// Creación de rutas que se utilizaran al exportar tablas
// Como buena practica u opcion se recomienda llamar el elemento igual al tipo de funcion a generar
getApoyo = function (callback) {
    Apoyo.findAll().then(apoyo => callback(apoyo))
}

//Creación de consultas pais - estado
// Recuperar información (1)
getEstadosAll = function (callback) {
    Estado.findAll({
        include: [
            { model: Pais, attributes: ['Nombre_Pais'] }
        ],
        attributes: ['id_Pais'],
    }).then(EstadoAll => callback(EstadoAll))
}

// Exportación de modulos (2)
//  Get
module.exports.getEstadosAll = this.getEstadosAll 

module.exports.init = init;
// Exportación de modulos
module.exports.getApoyo = getApoyo

