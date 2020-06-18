const express = require("express");

const router = express.Router();



// importando los controladores 
const nosotrosController = require('../controllers/nosotrosController');

const homeController = require('../controllers/homeController');

const viajesController = require('../controllers/viajesController');

const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () {
    // este use responde a todos los verbos http com put, delete, post, get, dispatch
    router.get("/", homeController.infoHome);

    router.get("/nosotros", nosotrosController.infoNosotros );

    router.get("/viajes", viajesController.infoViajes);

    router.get("/viajes/:id",viajesController.infoViaje );

    router.get("/testimoniales", testimonialesController.mostrarTestimoniales);
    // Cuando se llena el formulario 
    router.post("/testimoniales", testimonialesController.agregarTestimonial);
    return router;
};
