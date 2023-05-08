const express = require("express");
const cors = require('cors')
//const {conexion}=require('./helpers/dbConnect')
require('dotenv').config()
//configurar servidor

//EXPRESS
const app = express()
const port = process.env.PORT ;

//CORS
app.use(cors())


// parse app
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())






//rutas


app.use('/', require('./routers/routerRiverData'));
app.use('/user', require('./routers/routerUser'))
app.use('/admin', require('./routers/routerAdmin'));


//listener
app.listen(port, () => {
  console.log(`servidor a la escucha del puerto ${port}`)
})

