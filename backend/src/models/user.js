const {DataTypes} = require('sequelize');
const sequelize = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 3,
            notContains: {
                msg: 'Do not use the password word'
            }
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    }
});

User.prototype.toJSON = function(){
    const userObject = this.get();
    delete userObject.password;
    return userObject;   
}

User.generateToken = (user)=>{
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION
    })
   
    return token;
}

User.findByCredentials = async (username, password)=>{
    
    const user = await User.findOne({where: {
        username: username
    },
    include: ['tokens']
})

    if(!user){
        throw new Error('Wrong credentials.')
    }
      
    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch){
        throw new Error('Wrong credentials.')
    }

    return user;
}

User.beforeCreate(async (user, options)=>{
    const hashedPassword = await bcrypt.hash(user.password, 8);
    user.password = hashedPassword;
})

module.exports = User;
