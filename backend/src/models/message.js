const {DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../db/database');

const Message = sequelize.define('message', {
    text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 250
        }
    },
    likes: {
        type: DataTypes.BIGINT,
        validate: {
            min: 0,
        }
    }
});


module.exports = Message;