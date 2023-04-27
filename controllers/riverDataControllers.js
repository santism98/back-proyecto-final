const {getTodo, getXrio} = require('../models/modelRiverData');

const mostrarPruebas = async (req, res) => {
 
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
    console.log('Datos obtenidos:', data);
    
  } catch (error) {
    console.error('Error en la obtención de datos:', error);
    res.status(500).send('Error en la obtención de datos');
  }
};

// const mostrarPorRioYTramo = async (req, res) => {
//   try {
//     const rio = 'orbigo'
//     //req.params.rio;
//     const tramo = req.params.tramo;
//     const data = await mydata.find({ rio: rio.toLowerCase, }).sort({ tallaMedia: -1 });
//     console.log('Datos obtenidos:', data);
//     res.json(data);
//   } catch (error) {
//     console.error('Error en la obtención de datos:', error);
//     res.status(500).send('Error en la obtención de datos');
//   }
// };

// const recomendarPorPropiedades = async (req, res) => {
//   try {
    
   
//     const respuesta = await mydata.find({ rio: 'ORBIGO', tallaMedia: { $exists: true } })
//     const [data] = respuesta
    
//     console.log(data);

//     res.json(data);
//   } catch (error) {
//     console.error('Error al obtener los datos:', error);
//     res.status(500).json({ msg: 'Error al obtener los datos' });
//   }
// };


module.exports = {
  mostrarPruebas,
  mostrarCapturas
 // mostrarPorRioYTramo,
 // recomendarPorPropiedades
};
