const mongoose=require('mongoose')


const conexion= async()=>{
    console.log('conectando...')

try{
    const respuesta= await mongoose.connect(process.env.URI_CONNECT)
    console.log('conectado a la base de datos')  
    return respuesta  

}catch(error){
    return {
        ok: false,
        msg: 'error con la conexión',
        error
    }}

}

module.exports={
    conexion
}