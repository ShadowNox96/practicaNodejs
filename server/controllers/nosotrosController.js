// exportar multiples porciones y no solo una porcion 
exports.infoNosotros = (req, res) => {
    // como segundo parametro del render puedo mandar string o variables para la plantilla
    res.render("nosotros", {
        pagina: 'Sobre Nosotros'
    });
}