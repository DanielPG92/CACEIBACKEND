const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Grupo = sequelize.define('grupo',{
    id_grupo:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    descripcion: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Grupo.
module.exports = Grupo;

