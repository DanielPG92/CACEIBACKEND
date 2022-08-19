const express = require('express');
const mysql = require('../app/DB/mysql');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
var corsOptions = {
    origin: ["http://localhost:4200"]
}
app.use(cors(corsOptions));


app.listen(PORT, () => {
    console.log(`Servidor listo y escuchando en el puerto: ${PORT}`);
    mysql.init();
})


// llamado a rutas
require('../app/Routes/apoyoRoutes')(app, mysql);
require('../app/Routes/estadosRoutes')(app, mysql);
require('../app/Routes/usuarioRouter')(app, mysql);
require('../app/Routes/profesorRouter')(app, mysql);
require('../app/Routes/loginrouter')(app);