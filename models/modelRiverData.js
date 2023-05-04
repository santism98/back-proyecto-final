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
    console.log(result)
    return result
}

const getXrio= async (rio)=>{
    let client, result;
    try {
        client = await pool.connect();
        console.log(rio)
        const data = await client.query(queries.filtroRio, [rio])
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result


}


const getXSize= async ()=>{
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.filtroSize)
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result


}


const getXprovincia= async (provincia)=>{
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.filtroProvincia, [provincia])
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result


}






module.exports = { getTodo, getXrio, getXSize, getXprovincia}