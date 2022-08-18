
module.exports = function(app,mysql){
    app.get('/get/estados',(req,res) =>{
        mysql.getEstadosAll(function(result){
            res.send(result)
        })
    })
}