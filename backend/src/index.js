const app = require('./app');
const port = process.env.PORT;
const sequelize = require('./db/database');
const User = require('./models/user');
const Message = require('./models/message');
require('./models/associations');

app.listen(port, ()=>{
    console.log(`Running in port ${port}`)
    sequelize.authenticate().then(() => console.log('Connected to the database'))
    .catch( e => console.log('Unable to connect to the database', e));

    (async () => sequelize.sync())()

});
 
