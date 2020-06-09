const jwt   = require('jsonwebtoken');
const Promise = require('bluebird');

module.exports = (req, res, next) => {
    Promise.try(() =>{
        const secretKey = 'RANDOM_TOKEN_SECRET_IS_VALID';
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, secretKey);
        const userId = decodedToken.userId;

        if(req.body.userId && req.body.userId !== userId){
            throw 'Invalid UserId';
        } else {
            next();
        }
    }).catch(err => console.log(err));
};
