const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Cp = sequelize.define('cp',{
    id_CP:{
       type: Sequelize.DataTypes.STRING(45),
       primaryKey: true,
       autoincrement: false
    },
    Codigo: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_Municipio: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Cp.
module.exports = Cp;

