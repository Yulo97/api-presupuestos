const express = require('express')
const { connection } = require('../conexion/db.js');
const routerSesion = express.Router()

routerSesion.get('/iniciar-sesion', (req, res) => {
    const user = req.query.user;
    const pass = req.query.pass;

    connection.query(`call SP_INICIAR_SESION('${user}', '${pass}')`, (error, results) => { //SP
        if (error) throw error;
        res.send(results);
    });
});

module.exports = routerSesion;


// LINK PARA LLAMAR ESTA RUTA
// http://localhost:3000/iniciar-sesion?user=nombre_usuario&pass=contraseña