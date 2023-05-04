const { Pool } = require('pg')
const queries = require("./queries")

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'proyectoFinal',
    password: "admin"
})



const addData = async (id, provincia, rio,tramo, fecha, capturas_rs, talla_media, ninfa1, seca1 ) => {
    let client, result;
    try {
      client = await pool.connect();
      const data = await client.query(queries.agregarDatos, [id, provincia, rio,tramo, fecha, capturas_rs, talla_media, ninfa1, seca1])
      result = data.rows
    } catch (error) {
      console.log(error)
      throw error
    } finally { client.release() }
    return result
  }


  const updateData = async (req, res) => {
    try {
      const { tramo, talla_media, ninfa1, seca1, rio } = req.body;
      const id = req.params.id;
      const resultado = await db.query(queries.actualizarDatos, [tramo, talla_media, ninfa1, seca1, rio, id]);
      res.status(200).json({
        status: 'success',
        data: {
          riverData: resultado.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };




const eliminarDatos = async (req, res) => {
  try {
    const id = req.params.id;
    await db.query(queries.eliminarDatos, [id]);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    addData,
    updateData,
  eliminarDatos,
};


  module.exports = {addData}