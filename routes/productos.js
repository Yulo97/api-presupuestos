const express = require('express')
const { connection } = require('../conexion/db.js');
const routerProductos = express.Router()

routerProductos.get('/', (req, res) => {
    connection.query(`SELECT * FROM producto`, (error, results, fields) => {
        if (error) throw error;
        res.send(results)
    });
})

routerProductos.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`SELECT * FROM producto WHERE productoID LIKE ${id}`, (error, results, fields) => {
        if (error) throw error;
        res.send(results)
    })
})

routerProductos.delete('/eliminar-producto/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`DELETE FROM producto WHERE productoID LIKE ${id}`, (error, results) => {
        if (error) {
            throw error;
        }
        res.send("Se elimino el producto")
    })
})

routerProductos.post('/agregar-producto', (req, res) => {
    connection.query('INSERT INTO producto set ?', [req.body], (error, results) => {
        if (error) throw error;
        res.send("Se envio la solicitud");
    })
})

module.exports = routerProductos

