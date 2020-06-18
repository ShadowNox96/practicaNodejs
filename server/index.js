// Este es el archivo de configuracion mas importante 
// importar express 

const express = require('express');
// importo lo que son las rutas
const routes = require('./routes');
// Path es para selccionar la variable de entorno o ruta en dond nos encontramos 
const path = require('path');
// Configuraciones de express 
const app = express();

// importando el archivo de configuraciones 
const configs = require('./config');

// en esta parte se usa la libreria body parser para poder leer los elementos que vengan en el body de la peticion htttp
const bodyParser = require('body-parser');

// requiriendo dotenv 
require('dotenv').config({ path: 'variables.env'});



// habilitar pug 
app.set('view engine', 'pug');
// definir la ruta de las vistas en que direccion se van a encontrar
app.set('views', path.join(__dirname,'./views'));

// cargar las hojas de estilo y archivos estaticos, deciendole a node en donde se encuentran todos 
app.use(express.static('public'));

// validar si se esta en desarrollo o produccion 
const config = configs[app.get('env')];

// crear la variable para el sitio web 
app.locals.titulo = config.nombreSitio;

// Muestra el anio actual y genera la ruta donde estamos
app.use((req, res, next) => {
    // Creo la nueva fecha 
    const fecha = new Date();
    
    // Para poder pasar esta fecha al template es necesario utilizar lo que se le conoce como locals que son variables locales, que el mismo node js identifica y las pasa entre todos los archivos 
    
    res.locals.fechaActual = fecha.getFullYear();
    //este next es para que continue con la siguiente funcion 

    // obteniendo la ruta donde nos encontramos 
    res.locals.ruta = req.path;

    return next();
});

// ejecutar el body parser 
app.use(bodyParser.urlencoded({extended: true}));
// Cargando todas las rutas desde el archivo de rutas
app.use('/',routes());

// Puerto y host para la app 
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
    console.log('Servidor funcionando correctamente');
}); 