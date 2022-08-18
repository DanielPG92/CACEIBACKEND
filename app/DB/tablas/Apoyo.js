const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Apoyo = sequelize.define('apoyo',{
    id_Apoyo:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    Tipo_Apoyo: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla apoyo.
module.exports = Apoyo;

