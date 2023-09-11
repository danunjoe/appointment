var DataTypes = require("sequelize").DataTypes;
var _appointment = require("./appointment");
var _appointment_comment = require("./appointment_comment");
var _status = require("./status");
var _user = require("./user");

function initModels(sequelize) {
  var appointment = _appointment(sequelize, DataTypes);
  var appointment_comment = _appointment_comment(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  appointment_comment.belongsTo(appointment, { as: "appointment", foreignKey: "appointment_id"});
  appointment.hasMany(appointment_comment, { as: "appointment_comments", foreignKey: "appointment_id"});
  appointment.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(appointment, { as: "appointments", foreignKey: "status_id"});

  return {
    appointment,
    appointment_comment,
    status,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
