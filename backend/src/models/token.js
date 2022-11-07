const {DataTypes} = require('sequelize');
const sequelize = require('../db/database');

const Token = sequelize.define('token', {
    token: {
        type: DataTypes.STRING,
        primaryKey: true
    }
}, {
    timestamps: false,
});

Token.prototype.toJSON = function(){
  const tokenObject = this.get();
  delete tokenObject.userId;
  return tokenObject;   
}

module.exports = Token;