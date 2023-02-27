const express = require('express')
const app = express()
const cors = require('cors')

//setting
app.set('port', process.env.PORT || 9000)

//middlewares
app.use(express.json())
app.use(cors())

//routes
const routerProductos = require('./routes/productos.js')
app.use('/api/productos', routerProductos)

const routerClientes = require('./routes/clientes.js')
app.use('/api/clientes', routerClientes)

const routerSesion = require('./routes/sesion.js')
app.use('/api/sesion', routerSesion)


app.get('/api', (req, res) => {
    res.send('Estas conectado a la API')
})

app.listen(app.get('port'), () => {
    console.log(`Server funcionando en puerto ${app.get('port')}`)
})

