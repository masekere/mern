const UserModel = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {generateAccessToken} = require("../../utils/generateToken")
const generateTimeBasedTz = require("../../utils/generateTimeBasedTz")

/* 
@desc register user
@route POST /api/users
@access public
*/
module.exports = asyncHandler(async function (req, res) {
    const {username, email, password,country,timezone} = req.body;

    //check if all values are entered
    Object.values(req.body).some(n => {
        if (!n) {
            res.status(400);
            throw new Error("enter all credentials");
        }
    });

    //check if user exists 
    const userExists = await UserModel.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error("user already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt)

    //generate time based on timezone
    const time = generateTimeBasedTz(timezone);

    //save
    const user = await UserModel.create({
        username,
        email,
        password: hashedPassword,
        country,
        timezone,
        time
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            time,
            accessToken: generateAccessToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("invalid credentials");
    } 
});