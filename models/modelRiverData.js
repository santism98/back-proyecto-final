const { Pool } = require('pg')
const queries = require("./queries")

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'proyectoFinal',
    password: "admin"
})


//access to all entries 
const getTodo = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.mostrarTodo)
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}

const getXrio= async ()=>{
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.filtroRio)
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result

}






module.exports = { getTodo, getXrio}