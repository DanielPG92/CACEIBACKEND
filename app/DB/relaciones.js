const Apoyo = require('./tablas/Apoyo');
const Categoria = require('./tablas/Categorias');
const Pais = require('./tablas/Pais');
const Estado = require('./tablas/Estado');
const Colonias = require('./tablas/Colonias');
const CP = require('./tablas/Cp.JS');
const CuerpoAcademico = require('./tablas/CuerpoAcademico');

//tabla pais - estado
module.exports = function(){
    Estado.hasMany(Pais,{foreignKey:'id_Pais'});            //Tabla principal que tiene la llave foranea
    Pais.belongsTo(Estado,{foreignKey:'id_Pais'});          //Relación de llave foranea
}