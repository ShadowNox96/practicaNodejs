const Sequelize = require('sequelize');
// conexion a la base de datos 
const db = require('../config/database');
db.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// definicion del modelo 
const Viajes = db.define('viajes', {
    // todos los atributos de la tabla se ponen, excepto el id 
    
    tituloViaje: {
        type: Sequelize.STRING
    }, 
    precio : {
        type: Sequelize.DECIMAL(10,2)
    }, 
    fechaSalida : {
        type: Sequelize.DATE
    }, 
    fechaVuelta : {
        type: Sequelize.DATE
    }, 
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    disponibles : {
        type: Sequelize.STRING
    }
});

module.exports = Viajes;