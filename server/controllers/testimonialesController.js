const Testimoniales = require("../models/Testimoniales");



exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimoniales.findAll();

    res.render('testimoniales',{
        pagina: 'Testimoniales',
        testimoniales
    });
        
}

exports.agregarTestimonial = async (req,res) => {
    // validacion de todos los campos 
    let {nombre, correo, mensaje} = req.body;
    let errores = [];
    if(!nombre){
        errores.push({'mensaje' : 'Agrega tu Nombre'});
    }
    if(!correo){
        errores.push({'mensaje' : 'Agrega tu Correo'});
    }
    if(!mensaje){
        errores.push({'mensaje' : 'Agrega tu Mensaje'});
    }

    // revision si existen errores 
    if(errores.length > 0){
        // Muestra la plantialla con todos los errores presentes 
        const testimoniales = await Testimoniales.findAll();

        res.render('testimoniales', {
            errores, 
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales

        })
    }else{ 
        // Almacenar en la bd el testimoniales
        Testimoniales.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));

    }
}