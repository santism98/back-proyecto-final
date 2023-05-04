const express = require('express');
const router = express.Router()

const {mostrarPruebas, mostrarXrio, mostrarMasGrande, mostrarXprovincia, mostrarBiggerXrio, }= require('../controllers/riverDataControllers');
router.get('/todos', mostrarPruebas);
router.get('/rio', mostrarXrio);
router.get('/bigger', mostrarMasGrande);
router.get('/provincia', mostrarXprovincia);
router.get('/biggerRio', mostrarBiggerXrio);




module.exports = router;