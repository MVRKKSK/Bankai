const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    ppImage: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    resetToken: {},
    expireToken: {},

}, { timestamps: true });

module.exports = mongoose.model("user", userSchema)