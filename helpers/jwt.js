const config = require('../configs/config.json');
const { expressjwt: expressJwt } = require('express-jwt');

module.exports = jwt;

function jwt() {
  return expressJwt({ secret: config.secret_key, algorithms: ['HS256'], }).unless({
    path: [
      "/api/health",
      "/api/user/authen",
      "/api/status/list",
    ]
  });
}

