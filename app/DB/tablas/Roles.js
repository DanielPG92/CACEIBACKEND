const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Roles = sequelize.define('roles',{
    id_Roles:{
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

// Mandar a llamar a la tabla Roles.
module.exports = Roles;
