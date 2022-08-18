const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const GrupoMateria = sequelize.define('grupo_materia', {
    id_grupo_materia: {
        type: Sequelize.DataTypes.STRING(45),
       primaryKey: true,
       autoincrement: false  
    },
    id_grupo: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_materia: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más  
});

module.exports = GrupoMateria;