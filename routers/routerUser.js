const express = require('express');
const router = express.Router();

const {
  agregarDatos,
  actualizarDatos,
  eliminarDatos
} = require('../controllers/userControllers');

/**
 * @typedef {Object} Request
 
 */

/**
 * @function agregarDatos
 * @async
 * @param {Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>}
 * @throws {Error} If there is an error adding data.
 */
router.post('/agregar', agregarDatos);

/**
 * @function actualizarDatos
 * @async
 * 
 */
router.put('/actualizar', actualizarDatos);

/**
 * @function eliminarDatos

 */
router.delete('/delete', eliminarDatos);

module.exports = router;
