const express = require("express"),
    router = express.Router(),
    modelo = require("../services/modelo")

router.post('/', async function (req, res, next) {
    try {
        res.json(await modelo.create(req.body))
    } catch (error) {
        res.json(error)
    }    
});

router.get('/', async function (req, res, next) {
    try {
        res.json(await modelo.read(req.query))
    } catch (error) {
        res.json(error)
    }    
});

module.exports = router