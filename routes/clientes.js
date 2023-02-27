const express = require('express')
const { connection } = require('../conexion/db.js');
const routerClientes = express.Router()

routerClientes.get('/', (req, res) => {
    connection.query(`SELECT * FROM cliente`, (error, results) => {
        if(error){
            throw error;
        }
        res.send(results)
    })
})

routerClientes.get('/:id', (req, res) => {
    const id = req.params.id
        connection.query(`SELECT * FROM cliente WHERE clienteID LIKE ${id}`, (error, results) => {
        if(error){
            throw error;
        }
        res.send(results)
    })
})

routerClientes.post('/nuevo-cliente', (req, res) =>{
    connection.query('INSERT INTO cliente set ?', [req.body] , (error, results) =>{
        if(error){
            throw error;
        }
        res.send("Se envio la solicitud")
    })
})

module.exports = routerClientes

