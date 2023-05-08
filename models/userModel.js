/**

Conexión a la base de datos Postgres
@typedef {Object} Pool
@property {string} host - Nombre del host de la base de datos.
@property {string} user - Usuario de la base de datos.
@property {string} database - Nombre de la base de datos a la que conectarse.
@property {string} password - Contraseña de la base de datos.
*/
const { Pool } = require('pg');
const queries = require("./queries");

/**

Instancia de conexión a la base de datos.
@type {Pool}
*/
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Esto debería ser la URL de tu base de datos en ElephantSQL
  ssl: {
    rejectUnauthorized: false // Si estás en desarrollo, puedes desactivar la verificación del certificado SSL
  }
});
/**

Función para agregar datos a la base de datos.
@async
@function
@param {string} provincia - Nombre de la provincia del registro.
@param {string} rio - Nombre del río del registro.
@param {string} tramo - Nombre del tramo del registro.
@param {Date} fecha - Fecha del registro.
@param {number} capturas_rs - Número de capturas del registro.
@param {number} talla_media - Talla media del registro.
@param {string} ninfa1 - Nombre de la primera ninfa del registro.
@param {string} seca1 - Nombre de la primera seca del registro.
@param {string} user_email - Email del usuario que agrega el registro.
@returns {Promise<Object>} - Resultado de la consulta a la base de datos.
*/
const addData = async ( provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1, user_email ) => {
let client, result;
try {
client = await pool.connect();
const data = await client.query(queries.agregarDatos, [ provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1, user_email])
result = data.rows
} catch (error) {
console.log(error)
throw error
} finally {
if (client) client.release()
}
return result
}
/**

Función para actualizar datos en la base de datos.
@async
@function
@param {Object} data - Objeto con los datos del registro a actualizar.
@param {string} data.provincia - Nombre de la provincia del registro.
@param {string} data.rio - Nombre del río del registro.
@param {string} data.tramo - Nombre del tramo del registro.
@param {Date} data.fecha - Fecha del registro.
@param {number} data.capturas_rs - Número de capturas del registro.
@param {number} data.talla_media - Talla media del registro.
@param {string} data.ninfa1 - Nombre de la primera ninfa del registro.
@param {string} data.seca1 - Nombre de la primera seca del registro.
@param {number} data.id - Id del registro a actualizar.
@returns {Promise<Array>} - Resultado de la consulta a la base de datos.
@throws {Error} - Error al actualizar los datos.
*/
const updateData = async ({ provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1, id }) => {
  try {
    const resultado = await pool.query(queries.actualizarDatos, [provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1, id]);
    return resultado.rows;
  } catch (err) {
    console.log(err);
    throw new Error('Error al actualizar los datos');
  }
};

/**

Elimina los datos de la base de datos con el id especificado.
@async
@function eliminarDatos
@param {number} id - El id del registro que se desea eliminar.
@throws {Error} Si ocurre un error al conectarse a la base de datos o al realizar la eliminación.
@returns {Promise<import('pg').QueryResultRow[]>} Un arreglo de filas con los datos del registro eliminado.
*/

const eliminarDatos = async (id) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.eliminarDatos, [id])
    result = data.rows
  } catch (error) {
    console.log(error)
    throw error
  } finally { 
    if (client) client.release() 
  }
  return result
};

module.exports = {
  addData,
  updateData,
  eliminarDatos,
};
