const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Divisiones = sequelize.define('divisiones',{
    id_Divisiones:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    descripcion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Interno_Externo: {
        type: Sequelize.DataTypes.STRING(1),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Divisiones.
module.exports = Divisiones;
