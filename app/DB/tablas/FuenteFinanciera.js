const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const FuenteFinanciera = sequelize.define('fuente_financiera',{
    id_Fuente_Financiera:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    Tipo_Fuente: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla FuenteFinanciera.
module.exports = FuenteFinanciera;

