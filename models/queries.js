

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
    agregarDatos: `INSERT INTO myData (id, provincia, rio,tramo, fecha, capturas_rs, talla_media, ninfa1, seca1) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,

    eliminarDatos: 'DELETE FROM myData WHERE id=$1',
    actualizarDatos: 'UPDATE myData SET tramo = $1, talla_media = $2, ninfa1 = $3, seca1 = $4, rio = $5 WHERE id = $6 RETURNING *'
}


module.exports = queries