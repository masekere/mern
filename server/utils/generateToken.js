const jwt = require("jsonwebtoken");

function generateAccessToken(_id){
     return jwt.sign({_id}, "123", {
        expiresIn: '5d',
    })
}

 module.exports = {
     generateAccessToken
 }