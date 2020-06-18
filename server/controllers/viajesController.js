const Viajes = require('../models/Viajes');

exports.infoViajes = async (req, res) => {
    // Consulta a la bd, simepre van a ser una promise 
    // la variable viajes es el resultado de la consulta
    const viajes = await Viajes.findAll()
        res.render('viajes', {
            pagina: 'Proximos Viajes',
            // puede ir asi o solo viajes, ya que tiene el mismo nombre, se hace algo llamado el object literal en handsmean
            viajes
        });
        
}

exports.infoViaje = async (req, res) => {
    let idViaje = req.params.id;
    const viaje = await Viajes.findAll({
        where: {
            id: Number(idViaje)
        }
    })
    let respuesta = viaje[0];
        res.render('viaje',{
            viaje: respuesta.dataValues
        });
        
}