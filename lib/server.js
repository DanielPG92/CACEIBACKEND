const express = require('express');
const mysql = require("../app/DB/mysql")
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () =>{
    console.log(`Servidor listo y escuchando en el puerto: ${port}`);
    mysql.init();
})


// llamado a rutas
require('../app/Routes/apoyoRoutes')(app,mysql);
require('../app/Routes/estadosRoutes')(app,mysql);