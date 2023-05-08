/**

Realiza una consulta a una API utilizando el método HTTP especificado.

@async

@function

@param {string} url - La URL de la API a la cual se realizará la consulta.

@param {string} method - El método HTTP a utilizar para la consulta. Puede ser 'get', 'post', 'put' o 'delete'.

@param {Object} body - El cuerpo de la solicitud en caso de utilizar el método 'post' o 'put'.

@returns {Promise<Response>} - Una promesa que devuelve la respuesta de la API en formato Response.
*/
const consulta = async (url, method, body) => {
    let options = {};
    
    if (method === 'post' || method === 'put') {
    const data = { ...body };
    options = {
    method: method,
    body: JSON.stringify(data),
    headers: {
    'Content-type': 'application/json'
    }
    };
    }
    
    if (method === 'delete') {
    options = {
    method: method
    };
    }
    
    if (method === 'get') {
    options = {
    method: method
    };
    }
    
    return await fetch(`${urlBase}${url}`,options);
    };
    
    module.exports = { consulta };