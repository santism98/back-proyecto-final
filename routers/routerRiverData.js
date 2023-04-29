const express = require('express');
const router = express.Router();
const { mostrarTodo, mostrarCapturas, mostrarPorRioYTramo, mostrarXTamanio } = require('../controllers/riverDataControllers');
const {checkJwt} = require('../middleware/validationJWT');

// Agregar el middleware a una ruta específica
router.get('/capturas', checkJwt, mostrarCapturas);

// Agregar el middleware a todas las rutas en este archivo
router.use(checkJwt);

router.get('/todos', mostrarTodo);
router.get('/rio-y-tramo', mostrarPorRioYTramo);
router.get('/size', mostrarXTamanio);

module.exports = router;
