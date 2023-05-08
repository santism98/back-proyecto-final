const { getTodo, getXrio, getXSize, getXprovincia, getXFecha, getXemail, getCoordenadas } = require('../models/modelRiverData');

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

/**
 * Función asíncrona para mostrar los datos obtenidos para una provincia determinada
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 * @returns {Object} - Respuesta JSON con los datos obtenidos para la provincia
 */
const mostrarBiggerXrio = async (req, res) => {

  const rio = req.query.rio;
  console.log('esta es la provincia: ', rio);

  try {
    const previus = await getXrio(rio);
    const respuesta = await getXSize(previus);
    const data = respuesta;
    res.json(data);
    console.log('Datos obtenidos PROVINCIA:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

/**
 * Función asíncrona para mostrar los datos obtenidos para una fecha determinada
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 * @returns {Object} - Respuesta JSON con los datos obtenidos para la fecha
 */
const mostrarXfecha = async (req, res) => {

  try {
    const respuesta = await getXFecha();
    const data = respuesta;
    res.json(data);
    console.log('Datos obtenidos PROVINCIA:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

const mostrarXemail = async (req, res) => {
  const email = req.query.email
  console.log('esto es email: ', email)
  try {
    const respuesta = await getXemail(email);
    const data = respuesta
     res.json(data);
    console.log('Datos obtenidos email:', data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

const mostrarXcoordenadas = async (req, res) => {
  try {
    const respuesta = await getCoordenadas();
    const data = respuesta
   res.json(data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};


module.exports = {
  mostrarXcoordenadas,
  mostrarPruebas,
  mostrarXrio,
  mostrarMasGrande,
  mostrarXprovincia,
  mostrarBiggerXrio,
  mostrarXfecha,
  mostrarXemail
};
