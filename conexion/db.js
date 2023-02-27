const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '66.97.46.146',
  user: 'bg_lite',
  password: 'e2ae614f29a790259b6394ad7134bd0de46e10c745b679cf643096bf6e41d27a',
  database: 'db_presupuestos'
});

// VERIFICACION DE CONEXION
connection.connect((error) => {
  if (error) {
    console.log(error)
  }else{
    console.log("Conectado a MySQL")
  }
});

module.exports = {
  connection: connection
}