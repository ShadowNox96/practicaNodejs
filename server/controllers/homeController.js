// el modelo siempre esta conectado con la bd y tiene todos los metodos para realizar las consultas 

// Importando los modelos 
const Viajes = require('../models/Viajes');

const Testimoniales = require("../models/Testimoniales");

// Exportando el controlador 

exports.infoHome = async (req, res) => {
    // Asi se hacen las multiples consultas
    
    const viajes = await Viajes.findAll({
            limit: 3
        });
    

    const testimoniales = await Testimoniales.findAll({
            limit: 3
        });
    
        res.render('index',{
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        })
    // request es lo que le estoy pidiendo a la pagina
    // response es lo contrario lo que responde a la pagina
}