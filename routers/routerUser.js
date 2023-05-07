const express = require('express');
const router = express.Router();

const {
  agregarDatos,
  actualizarDatos,
  eliminarDatos
} = require('../controllers/userControllers');

/**
 * @typedef {Object} Request
 * @property {Object} body - The request body object.
 * @property {string} body.provincia - The name of the province.
 * @property {string} body.rio - The name of the river.
 * @property {string} body.tramo - The section of the river.
 * @property {string} body.fecha - The date of the data.
 * @property {number} body.capturas_rs - The number of captures.
 * @property {number} body.talla_media - The average size.
 * @property {number} body.ninfa1 - The number of nympha.
 * @property {number} body.seca1 - The number of caddisfly.
 * @property {string} body.user_email - The email of the user.
 * @property {Object} params - The request parameters object.
 * @property {string} params.id - The ID of the data to update or delete.
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
 * @param {Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>}
 * @throws {Error} If there is an error updating data.
 */
router.put('/actualizar/:id', actualizarDatos);

/**
 * @function eliminarDatos
 * @async
 * @param {Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>}
 * @throws {Error} If there is an error deleting data.
 */
router.delete('/delete/:id', eliminarDatos);

module.exports = router;
