const { Pool } = require('pg')
const queries = require("./queries")

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Esto debería ser la URL de tu base de datos en ElephantSQL
    ssl: {
      rejectUnauthorized: false // Si estás en desarrollo, puedes desactivar la verificación del certificado SSL
    }
  });

/**
 * Obtiene todas las entradas de la tabla 'todos'.
 * @returns {Promise<Array>} Un array con todas las entradas.
 * @throws {Error} Si no se puede conectar a la base de datos.
 */
const getTodo = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.mostrarTodo)
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    console.log(result)
    return result
}


const getXemail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        console.log(email)
        const data = await client.query(queries.mostrarXemail, [email])
        result = data.rows || []; // Si data.rows es falsy, se establece como un array vacío
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}




/**
 * Obtiene los registros de la base de datos filtrando por un río especificado.
 * @async
 * @param {string} rio - Nombre del río a filtrar.
 * @returns {Promise<object[]>} - Arreglo de objetos con los registros que coinciden con el río especificado.
 * @throws {Error} - Si ocurre un error durante la ejecución de la consulta.
 */
const getXrio = async (rio) => {
    let client, result;
    try {
        client = await pool.connect();
        console.log(rio)
        const data = await client.query(queries.filtroRio, [rio])
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}

/**
 * Obtiene los registros de la base de datos filtrando por tamaño.
 * @async
 * @returns {Promise<object[]>} - Arreglo de objetos con los registros que coinciden con el tamaño especificado.
 * @throws {Error} - Si ocurre un error durante la ejecución de la consulta.
 */
const getXSize = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.filtroSize)
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}

/**
 * Obtiene los registros de la base de datos filtrando por una provincia especificada.
 * @async
 * @param {string} provincia - Nombre de la provincia a filtrar.
 * @returns {Promise<object[]>} - Arreglo de objetos con los registros que coinciden con la provincia especificada.
 * @throws {Error} - Si ocurre un error durante la ejecución de la consulta.
 */
const getXprovincia = async (provincia) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.filtroProvincia, [provincia])
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}

/**

Obtiene todos los registros de la base de datos que estén filtrados por fecha.
@async
@function getXFecha
@returns {Promise<Array>} Array de objetos con los datos de los registros filtrados por fecha.
@throws {Error} Si ocurre algún error al ejecutar la consulta a la base de datos.
*/
const getXFecha= async ()=>{
    let client, result;
    try {
    client = await pool.connect();
    const data = await client.query(queries.filtroFecha)
    result = data.rows
    } catch (error) {
    console.log(error)
    throw error
    } finally { client.release() }
    return result
    }

    const getCoordenadas= async ()=>{
        let client, result;
        try {
        client = await pool.connect();
        const data = await client.query(queries.mostrarCoordenadas)
        result = data.rows
        } catch (error) {
        console.log(error)
        throw error
        } finally { client.release() }
        return result
        }
    






module.exports = { getCoordenadas ,getTodo, getXrio, getXSize, getXprovincia, getXFecha, getXemail}