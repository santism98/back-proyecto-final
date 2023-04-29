const {getTodo, getXrio, getXprops, getXsize} = require('../models/modelRiverData');

const mostrarTodo = async (req, res) => {
 
  try {
    const respuesta = await getTodo();
    const [data] = respuesta
    res.json(data);
    console.log('Datos obtenidos:', data);
    
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

const mostrarCapturas = async (req, res) => {
 
  try {
    const respuesta = await getXrio();
    const [data] = respuesta
   // res.json(data);
    console.log('Datos capturas:', data);
    
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

const mostrarPorRioYTramo = async (req, res) => {
  try {
   // const rio = 'orbigo'
    req.params.rio;
   const respuesta = await getXprops()
   const [data]= respuesta
    console.log('Datos rio y tramo:', data);
    res.json(data);
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

const mostrarXTamanio = async (req, res) =>{
  try {
    const respuesta = await getXsize();
    const [data] = respuesta
    res.json(data);
    console.log('Datos size:', data);
    
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }

}




module.exports = {
  mostrarTodo,
  mostrarCapturas,
  mostrarPorRioYTramo,
  mostrarXTamanio
 // recomendarPorPropiedades
};

