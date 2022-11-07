const User = require('./user');
const Message = require('./message');
const Token = require('./token');

User.hasMany(Message);
Message.belongsTo(User);

User.hasMany(Token);
Token.belongsTo(User);