const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'error en el token'
        });
    }

    try {
        const { NombreCompleto, idProfesor } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.idProfesor = idProfesor;
        req.NombreCompleto = NombreCompleto;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }
    next();
}
module.exports = {
    validarJWT
}