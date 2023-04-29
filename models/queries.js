const queries = {
    mostrarTodo: `SELECT tramo, talla_media, ninfa1, seca1, rio
    FROM myData
    ORDER BY capturas_rs DESC
    LIMIT 2`,

    filtroRio: `SELECT tramo, ninfa1, ninfa2, seca1, SUM(capturas_rs) AS total_capturas
    FROM myData
    WHERE rio = 'ORBIGO'
    GROUP BY tramo, ninfa1, ninfa2, seca1
    ORDER BY total_capturas DESC
    LIMIT 10;
    `,
    filtroSize: `SELECT tramo, talla_media, ninfa1, seca1, rio
    FROM myData
    ORDER BY capturas_rs DESC
    LIMIT 2;
    `,
    
}


module.exports = queries