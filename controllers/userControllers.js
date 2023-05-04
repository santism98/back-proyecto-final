const { addData } = require('../models/userModel');

const agregarDatos = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { id, tramo, talla_media, ninfa1, seca1, rio, provincia } = req.body;

    // Validar que los datos requeridos estén presentes
    if (!tramo || !talla_media || !ninfa1 || !seca1 || !rio || !provincia) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    // Agregar los datos a la base de datos
    const result = await addData(id, provincia, rio,tramo, fecha, capturas_rs, talla_media, ninfa1, seca1);
    console.log(result)

    // Enviar una respuesta de éxito
    return res.status(201).json({ message: 'Datos agregados correctamente' });
  } catch (error) {
    // Enviar una respuesta de error
    return res.status(500).json({ message: 'Error al agregar los datos', error });
  }
};

const actualizarDatos = async (req, res) => {
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
  
  

module.exports = { agregarDatos, actualizarDatos, eliminarDatos };
