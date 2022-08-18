const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const tipoProyecto = sequelize.define('tipo_proyecto',{
    id_Tipo_Proyecto:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    Nombre_Tipo_Proyecto: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Tipo_investigacion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla tipoProyecto.
module.exports = tipoProyecto;

