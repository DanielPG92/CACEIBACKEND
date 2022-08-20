module.exports = function(app, mysql) {
    app.post('/post/interno', (req, res) => {
        mysql.postUsuariosDavi(req.body, function(result) {
            res.send(result)
        })
    })


    app.get('/get/usuarios', (req, res) => {
        mysql.getUsuariosDaniel(function(result) {
            res.send(result);
        })
    })
}