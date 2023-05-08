const { Pool } = require('pg');
const queries = require('./queries');

// Crea una nueva instancia de conexión a la base de datos
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Esto debería ser la URL de tu base de datos en ElephantSQL
  ssl: {
    rejectUnauthorized: false // Si estás en desarrollo, puedes desactivar la verificación del certificado SSL
  }
});



const getUsuarios = async () => {
  let client, result;
  try {
      client = await pool.connect();
      const data = await client.query(queries.mostrarUsuarios)
      result = data.rows
  } catch (error) {
      console.log(error)
      throw error
  } finally { client.release() }
  console.log(result)
  return result
}

// Elimina un usuario a partir de su correo electrónico
const  deleteUserByEmail=async(email)=> {
  const client = await pool.connect();

  try {
    // Ejecuta la consulta para eliminar el usuario
    const result = await client.query(queries.eliminarUsuario, [email]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  getUsuarios,
  deleteUserByEmail

};
