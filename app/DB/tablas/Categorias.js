const { Sequelize } = require('sequelize')
const sequelize = require('../configDB');

const Categorias = sequelize.define('categorias',{
    id_categoria:{
       type: Sequelize.DataTypes.INTEGER,
       primaryKey: true,
       autoincrement: true
    },
    descripcion: {
        type: Sequelize.DataTypes.STRING(3),
        allowNull: false
    }
},{
    freezeTableName: true,  //Respetar nombre de tabla
    timestamps: false,      //Evitar fechas que se pueden genera de más 
})

// Mandar a llamar a la tabla Categorias.
module.exports = Categorias;
