const { response } = require('express');
const sequelize = require('../../DB/configDB');
const bcrypt = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');
const loginUsuario = async(req, res) => {
    const { NombreCompleto, Contrasena } = req.body;
    try {
        //validar al usuario o al correo
        const dbUser = await sequelize.query(
            "select  * from usuarios where NombreCompleto = '" + NombreCompleto + "'; ", {
                type: sequelize.QueryTypes.SELECT
            });
        if (dbUser >= 0) {
            return res.status(400).json({
                ok: false,
                msg: 'El profesor no existe ',
                user: dbUser
            })
        }
        //validar contraseña
        const validPassword = bcrypt.compareSync(Contrasena, dbUser[0].Contrasena);
        if (!validPassword) {
            return res.status(400).json({
                of: false,
                msg: 'El password no es valido'
            });
        }

        //creat JWT
        const token = await generarJWT(dbUser[0].idProfesor, NombreCompleto);

        return res.json({
            ok: true,
            msg: 'ruta login',
            NombreCompleto: dbUser[0].NombreCompleto,
            idProfesor: dbUser[0].idProfesor,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const revalidarToken = async(req, res = response) => {
    const { NombreCompleto, idProfesor } = req;
    //Gwenerar token
    const token = await generarJWT(idProfesor, NombreCompleto);
    return res.json({
        ok: true,
        msg: 'Renew',
        idProfesor,
        NombreCompleto,
        token
    })

}



module.exports = {
    loginUsuario,

    revalidarToken
}