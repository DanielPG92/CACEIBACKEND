const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Colonia = sequelize.define('colonia',{
    id_Colonia:{
       type: Sequelize.DataTypes.STRING(45),
       primaryKey: true,
       autoincrement: false
    },
    Nombre_Colonia: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_CP: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Colonia.
module.exports = Colonia;

