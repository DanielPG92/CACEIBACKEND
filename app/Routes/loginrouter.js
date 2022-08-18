const { check } = require('express-validator');
const { validarCampos } = require('../Login/midelware/validar-campos');
const { loginUsuario, revalidarToken } = require('../Login/controllers/auth');
const { validarJWT } = require('../Login/midelware/validar-jwt');


module.exports = function(app) {

    app.post('/post/login', [
            check('El nombre es obligatorio', 'Wl email es obligatorio'),
            check('NombreCompleto', 'La contraseña es obligatoria').isLength({ min: 6 }),
            validarCampos
        ],
        loginUsuario);

    app.get('/get/renew', validarJWT, revalidarToken);

}