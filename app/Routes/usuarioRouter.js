module.exports = function(app, mysql) {
    app.post('/post/interno', (req, res) => {
        mysql.postUsuariosDavi(req.body, function(result) {
            res.send(result)
        })
    })
}