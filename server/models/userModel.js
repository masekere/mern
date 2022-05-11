const { model, Schema } = require("mongoose");

const userSchema = Schema(
    {
        username: {
            type: String,
            required: [true, 'please add name'],
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'please add email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'please add password'],
        },
        country: {
            type: String,
            required: [true, 'please add country'],
        },
        timezone: {
            type: String,
            required: [true, 'please add timezone'],
        },
        time: {
            type: String,
            required: [true, 'please add time'],
        },
    },
    {
        timestamps: true
    }
)

module.exports = model("User", userSchema)
