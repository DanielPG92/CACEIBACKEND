const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Pais = sequelize.define('pais',{
    id_Pais:{
       type: Sequelize.DataTypes.STRING(45),
       primaryKey: true,
       autoincrement: false
    },
    Nombre_Pais: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Pais.
module.exports = Pais;

