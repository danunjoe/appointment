const bcryptjs = require('bcryptjs');

exports.encode = function (str) {
  return bcryptjs.hashSync(str, 10);
}