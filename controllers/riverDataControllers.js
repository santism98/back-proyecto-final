const { getTodo, getXrio, getXSize, getXprovincia } = require('../models/modelRiverData');

/**
 * Muestra todos los datos disponibles.
 * @function
 * @async
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} No devuelve nada.
 */
const mostrarPruebas = async (req, res) => {
  try {
    const respuesta = await getTodo();
    const data = respuesta
    res.json(data);
    console.log('Datos obtenidos TODOS:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

/**
 * Muestra datos solo para un río específico.
 * @function
 * @async
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} No devuelve nada.
 */
const mostrarXrio = async (req, res) => {
  const rio = req.query.rio
  try {
    const respuesta = await getXrio(rio);
    console.log('esto es respuesta',respuesta)
    const data = respuesta
     res.json(data);
    console.log('Datos obtenidos RIO:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

/**
 * Muestra los datos de la captura más grande.
 * @function
 * @async
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} No devuelve nada.
 */
const mostrarMasGrande = async (req, res) => {
  try {
    const respuesta = await getXSize();
    const data = respuesta
     res.json(data);
    console.log('Datos obtenidos BIGGER:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

/**
 * Muestra los datos para una provincia específica.
 * @function
 * @async
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} No devuelve nada.
 */
const mostrarXprovincia = async (req, res) => {
  const provincia = req.query.provincia
  console.log('esta es la provincia: ', provincia)
  try {
    const respuesta = await getXprovincia(provincia);
    const data = respuesta
     res.json(data);
    console.log('Datos obtenidos PROVINCIA:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

const mostrarBiggerXrio = async (req, res) => {

  const rio = req.query.rio
  console.log('esta es la provincia: ', rio)
  try {
    const previus = await getXrio(rio);
    const respuesta = await getXSize(previus)
    const data = respuesta
     res.json(data);
    console.log('Datos obtenidos PROVINCIA:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};




module.exports = {
  mostrarPruebas,
  mostrarXrio,
  mostrarMasGrande,
  mostrarXprovincia,
  mostrarBiggerXrio
};
