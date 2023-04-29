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

  module.exports = {checkJwt}