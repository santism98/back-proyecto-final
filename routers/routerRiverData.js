const express = require('express');
const router = express.Router()

const {mostrarPruebas, mostrarCapturas, }= require('../controllers/riverDataControllers');
router.get('/todos', mostrarPruebas);
router.get('/props', mostrarCapturas)





module.exports = router;