const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const {generateAccessToken} = require("../../utils/generateToken")

module.exports = asyncHandler(async function (req, res) {
    const {username,password} = req.body;
    
    //check if user exists and password correct
    const user = await userModel.findOne({username});
    
    if(user && await bcrypt.compare(password, user.password)){
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            time: user.time,
            accessToken: generateAccessToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("invalid credentilas");
    }
})