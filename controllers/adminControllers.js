const {getUsuarios, deleteUserByEmail}= require('../models/modelAdmin');



const mostrarUsuarios = async (req, res) => {
  try {
    const respuesta = await getUsuarios();
    const data = respuesta
   res.json(data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};


// Elimina un usuario a partir de su correo electrónico
const deleteUser= async(req, res)=> {
  const email  = req.query.email;
  console.log('este es el email a borrar: ', email)

  try {
    
    console.log('desde api:', email)
    await userModel.deleteUserByEmail(email);
    return res.status(200).json({
      ok:true,
      msg:'Eliminado'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  deleteUser,
  mostrarUsuarios
};

