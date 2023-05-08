/**

Módulo de manejo de rutas para datos de ríos.
@module routes/riverDataRoutes
*/
const express = require('express');
const router = express.Router()

const {
mostrarPruebas,
mostrarXrio,
mostrarMasGrande,
mostrarXprovincia,
mostrarBiggerXrio,
mostrarXfecha,

mostrarXemail,
mostrarXcoordenadas
} = require('../controllers/riverDataControllers');

/**

Ruta para obtener todos los datos de los ríos.
@name get/todos
@function
@memberof module:routes/riverDataRoutes
@inner
@param {Object} req - Objeto de solicitud HTTP.
@param {Object} res - Objeto de respuesta HTTP.
@param {function} next - Función para pasar al siguiente controlador de middleware.
*/
router.get('/todos', mostrarPruebas);
/**

Ruta para obtener los datos de los ríos por nombre de río.
@name get/rio
@function
@memberof module:routes/riverDataRoutes
@inner
@param {Object} req - Objeto de solicitud HTTP.
@param {Object} res - Objeto de respuesta HTTP.
@param {function} next - Función para pasar al siguiente controlador de middleware.
*/
router.get('/rio', mostrarXrio);
/**

Ruta para obtener los datos de los ríos con la mayor talla media.
@name get/bigger
@function
@memberof module:routes/riverDataRoutes
@inner
@param {Object} req - Objeto de solicitud HTTP.
@param {Object} res - Objeto de respuesta HTTP.
@param {function} next - Función para pasar al siguiente controlador de middleware.
*/
router.get('/bigger', mostrarMasGrande);
/**

Ruta para obtener los datos de los ríos por provincia.
@name get/provincia
@function
@memberof module:routes/riverDataRoutes
@inner
@param {Object} req - Objeto de solicitud HTTP.
@param {Object} res - Objeto de respuesta HTTP.
@param {function} next - Función para pasar al siguiente controlador de middleware.
*/
router.get('/provincia', mostrarXprovincia);
/**

Ruta para obtener los datos de los ríos con la mayor talla media por nombre de río.
@name get/biggerRio
@function
@memberof module:routes/riverDataRoutes
@inner
@param {Object} req - Objeto de solicitud HTTP.
@param {Object} res - Objeto de respuesta HTTP.
@param {function} next - Función para pasar al siguiente controlador de middleware.
*/
router.get('/biggerRio', mostrarBiggerXrio);
/**

Ruta para obtener los datos de los ríos por fecha.
@name get/fecha
@function
@memberof module:routes/riverDataRoutes
@inner
@param {Object} req - Objeto de solicitud HTTP.
@param {Object} res - Objeto de respuesta HTTP.
@param {function} next - Función para pasar al siguiente controlador de middleware.
*/
router.get('/fecha', mostrarXfecha);

router.get('/coord', mostrarXcoordenadas);

router.get('/email', mostrarXemail);
module.exports = router;