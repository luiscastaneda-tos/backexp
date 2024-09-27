const express = require("express"),
    router = express.Router(),
    modelo = require("../services/modelo")

router.post('/', async function (req, res, next) {
    try {
        res.json(await modelo.create(req.body))
    } catch (error) {
        if(error.errno == 1062){
            res.json({
                error : 1062,
                message: "Ya tienes una suscripción activa con este correo. Si necesitas ayuda, no dudes en contactarnos."
            })
        } else {
            res.json({
                error : error.errno,
                message: `Hola, toma captura a este mensaje con el codigo: ${error.errno} podremos resolverte el problema, contactanos por redes sociales!`
            })
        }
    }    
});

module.exports = router