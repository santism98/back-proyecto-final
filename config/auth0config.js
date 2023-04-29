const {auth0} = require('auth0-js');

const auth0Client = new auth0.WebAuth({
  domain: 'TU_DOMINIO.auth0.com',
  clientID: 'TU_CLIENT_ID',
  redirectUri: 'TU_URL_DE_CALLBACK',
  responseType: 'token id_token',
  scope: 'openid profile'
});

module.exports={auth0Client}
