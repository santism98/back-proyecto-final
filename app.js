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

// establece la carpeta static

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public")

//restablecer template engine

app.set('view engine', 'ejs')
app.set("views", __dirname + "/views");

// parse app
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())



//conexion 

//conexion()


//rutas


app.use('/', require('./routers/routerRiverData'));
app.use('/user', require('./routers/routerUser'))


//listener
app.listen(port, () => {
  console.log(`servidor a la escucha del puerto ${port}`)
})

