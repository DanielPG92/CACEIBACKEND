const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const GradosDivision = sequelize.define('grados_division',{
    id_Grados_Division:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    Descripcion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_Division: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla GradosDivision.
module.exports = GradosDivision;

