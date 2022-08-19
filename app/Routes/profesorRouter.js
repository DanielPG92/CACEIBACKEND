module.exports = function(app, mysql) {
    app.get('/get/profesor/:idProfesor', (req, res) => {
        mysql.getProfesor(req.params.idProfesor, result => res.send(result));
    })

    app.get('/get/iu/:idUsuarios', (req, res) => {
        mysql.getInternoUser(req.params.idUsuarios, result => res.send(result));

    });
}