
/**
 * Módulo para las rutas del panel de administración.
 * @module routes/adminRoutes
 */

const express = require('express');
const router = express.Router();

const { deleteUser, mostrarUsuarios } = require('../controllers/adminControllers');

/**
 * Obtiene todos los datos de la base de datos (provisional).
 *
 * @name get/admin
 * @function
 * @memberof module:routes/adminRoutes

 */
router.delete('/delete', deleteUser);
router.get('/usuarios', mostrarUsuarios);

module.exports = router;
