const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

module.exports = asyncHandler(async (req, res, next) => {
    if (!req.headers.authorization){
        res.status(401);
        throw new Error('Not authorized, no token');
    }

    if ( req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            const token = req.headers.authorization.split(' ')[1]
      
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
      
            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password')
            next()
          } catch (error) {
            res.status(401);
            throw new Error(error);
          }

    }
})