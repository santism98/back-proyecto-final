const userModel = require('../models/userModel');

/**
 * Agrega los datos de una captura a la base de datos.
 * @async
 * @function agregarDatos
 * @param {Object} req - La solicitud HTTP recibida.
 * @param {Object} res - La respuesta HTTP que se enviará al cliente.
 * @returns {Object} Una respuesta HTTP que indica si se agregaron los datos correctamente o si se produjo un error.
 * @throws {Object} Un objeto de error si ocurre un error al agregar los datos.
 */
const agregarDatos = async (req, res) => {
  try {
    // Obtener el email del usuario a partir del token JWT decodificado
    const { email } = req.user;

    // Obtener los datos del cuerpo de la solicitud
    const { id, provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1 } = req.body;

    // Validar que los datos requeridos estén presentes
    // if (!tramo || !talla_media || !ninfa1 || !seca1 || !rio || !provincia) {
    //   return res.status(400).json({ message: 'Faltan campos obligatorios' });
    // }

    // Agregar los datos a la base de datos, incluyendo el email del usuario
    const result = await userModel.addData({id, provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1, email});
    console.log(result)

    // Enviar una respuesta de éxito
    return res.status(201).json({ message: 'Datos agregados correctamente' });
  } catch (error) {
    // Enviar una respuesta de error
    return res.status(500).json({ message: 'Error al agregar los datos', error });
  }
};

/**
 * Actualiza los datos de una captura en la base de datos.
 * @async
 * @function actualizarDatos
 * @param {Object} req - La solicitud HTTP recibida.
 * @param {Object} res - La respuesta HTTP que se enviará al cliente.
 * @returns {Object} Una respuesta HTTP que indica si se actualizaron los datos correctamente o si se produjo un error.
 * @throws {Object} Un objeto de error si ocurre un error al actualizar los datos.
 */
const actualizarDatos = async (req, res) => {
  try {
    const { provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1 } = req.body;
    const id = req.query.id;
    const resultado = await userModel.updateData({ provincia, rio, tramo, fecha, capturas_rs, talla_media, ninfa1, seca1, id });
    res.status(200).json({
      status: 'success',
      data: {
        riverData: resultado[0],
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error al actualizar los datos', error: err });
  }
};

/**
 * Elimina los datos de una captura de la base de datos.
 * @async
 * @function eliminarDatos
 * @param {Object} req - La solicitud HTTP recibida.
 * @param {Object} res - La respuesta HTTP que se enviará al cliente.
 * @returns {Object} Una respuesta HTTP que indica si se eliminaron los
*/


const eliminarDatos = async (req, res) => {
  try {
    const id = req.query.id;
    await userModel.eliminarDatos(id);
    return res.status(200).json({
      ok:true,
      msg:'Eliminado'
    });
    
  } catch (error) {
    // Enviar una respuesta de error
    return res.status(500).json({ message: 'Error al eliminar los datos', error });
  }
};

module.exports = { agregarDatos, actualizarDatos, eliminarDatos };


