const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const InstanciaProfesor = sequelize.define('instancia_profesor',{
    id_instancia_profesor:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    descripcion: {
        type: Sequelize.DataTypes.STRING(3),
        allowNull: false
    },
    aneo: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla InstanciaProfesor.
module.exports = InstanciaProfesor;
