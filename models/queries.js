/**

Objeto que contiene las consultas SQL utilizadas en la aplicación.
@typedef {Object} Queries
@property {string} mostrarTodo Consulta para obtener todos los registros de la tabla mydata.
@property {string} filtroRio Consulta para filtrar registros por río.
@property {string} filtroSize Consulta para filtrar registros por talla máxima.
@property {string} filtroProvincia Consulta para filtrar registros por provincia.
@property {string} filtroFecha Consulta para obtener registros del mes actual.
@property {string} agregarDatos Consulta para agregar un nuevo registro a la tabla mydata.
@property {string} eliminarDatos Consulta para eliminar un registro de la tabla mydata.
@property {string} actualizarDatos Consulta para actualizar un registro de la tabla mydata.
*/
/**

Objeto que contiene las consultas SQL utilizadas en la aplicación.

@type {Queries}
*/



const queries = {
    mostrarTodo: `SELECT id, capturas_rs, tramo, talla_media, ninfa1, seca1, rio
    FROM mydata`,

    filtroRio: `SELECT id, capturas_rs, tramo, talla_media, ninfa1, seca1, rio
    FROM myData
    WHERE rio = $1
    GROUP BY tramo, ninfa1, ninfa2, seca1, capturas_rs, id
    ORDER BY capturas_rs DESC
    LIMIT 10;
    `,
    filtroSize: `SELECT id, capturas_rs, tramo, talla_media, ninfa1, seca1, rio
    FROM myData
    WHERE talla_max IS NOT NULL
    GROUP BY id, capturas_rs, tramo, talla_media, ninfa1, seca1, rio
    ORDER BY talla_max DESC
    LIMIT 10;
    `,
    filtroProvincia: `SELECT id, capturas_rs, tramo, talla_media, ninfa1, seca1, rio
    FROM myData
    WHERE provincia = $1 
    ORDER BY capturas_rs DESC
    LIMIT 20;`,

    filtroFecha: `SELECT id, capturas_rs, tramo, talla_media, ninfa1, seca1, rio
    FROM mydata
    WHERE extract(month from fecha) = extract(month from now())`,
    agregarDatos: `INSERT INTO myData (id, provincia, rio,tramo, fecha, capturas_rs, talla_media, ninfa1, seca1, user_email) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,

    eliminarDatos: 'DELETE FROM myData WHERE id=$1',


    actualizarDatos: 'UPDATE mydata SET provincia = $1, rio= $2, tramo= $3, fecha= $4, capturas_rs= $5, talla_media= $6, ninfa1= $7, seca1= $8  WHERE id = $9; '
}


module.exports = queries

