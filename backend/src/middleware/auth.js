const jwt = require('jsonwebtoken');

const auth = async (req, res, next)=>{

    try {
        const token = req.header("Authorization").replace('Bearer ', '');
        const payload = jwt.verify(token, process.env.JWT_SECRET);
         
    } catch (error) {
        
    }
    
    next();
}

module.exports = auth;
