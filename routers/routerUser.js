const express = require('express');
const router = express.Router();
const { agregarDatos, actualizarDatos, eliminarDatos } = require('../controllers/userControllers');



//router.post('/agregar', agregarDatos);
router.post('/agregar', agregarDatos); // Nueva ruta para agregar datos
router.put('/:id', actualizarDatos);

// Ruta para eliminar datos
router.delete('/:id', eliminarDatos);


module.exports = router;