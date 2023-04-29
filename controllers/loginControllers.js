const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { auth0 } = require('../config/keys');
const {checkJwt} = require('../middleware/validationJWT')

// Configuración de Auth0
const authConfig = {
  domain: auth0.domain,
  audience: auth0.audience,
};

// Middleware para validar el token JWT
const checkJwt = jwt({
  // Obtiene la clave pública desde Auth0
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  // Valida la audiencia y el emisor del token JWT
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256'],
});

// Controlador para la página de inicio de sesión
exports.loginPage = (req, res) => {
  res.render('login');
};

// Controlador para procesar el inicio de sesión
exports.login = (req, res) => {
  // Redirige al inicio de sesión de Auth0
  res.redirect(`https://${authConfig.domain}/authorize?response_type=code&client_id=${auth0.clientId}&redirect_uri=${auth0.redirectUri}&scope=openid%20profile%20email`);
};

// Controlador para procesar el callback de Auth0
exports.loginCallback = (req, res) => {
  const { code } = req.query;

  // Intercambia el código de autorización por un token de acceso
  request.post({
    url: `https://${authConfig.domain}/oauth/token`,
    form: {
      grant_type: 'authorization_code',
      client_id: auth0.clientId,
      client_secret: auth0.clientSecret,
      code,
      redirect_uri: auth0.redirectUri,
    },
    json: true,
  }, (error, response, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al autenticar el usuario.');
      return;
    }

    // Extrae los datos del usuario del token de acceso
    request.get({
      url: `https://${authConfig.domain}/userinfo?access_token=${body.access_token}`,
      json: true,
    }, (error, response, body) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error al autenticar el usuario.');
        return;
      }

      // Crea la sesión del usuario y lo redirige a la página principal
      req.session.user = body;
      res.redirect('/');
    });
  });
};

// Controlador para la página principal
exports.index = (req, res) => {
  // Verifica el token JWT
  checkJwt(req, res, (err) => {
    if (err) {
      // Si hay un error de autenticación, redirige al inicio de sesión
      res.redirect('/login');
      return;
    }

    // Renderiza la página principal con los datos del usuario
    res.render('index', { user: req.session.user });
  });
};
