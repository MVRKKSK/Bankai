const user = require("../models/user.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const followers = require("../models/followers")
const Emailvalidator = require("email-validator");

exports.getUserDetails = async(req, res) => {
    const userId = await req.userId
    console.log(userId)
    try {
        const userData = await user.findById({ _id: userId })
        const followerData = await followers.findById({ _id: userId })
        res.status(200).send({ userData, followerData })
    } catch (err) {
        res.status(401).json({ err })
    }


}

exports.AuthUser = async(req, res) => {
    try {
        const { email, password, username } = req.body
        var loginId;
        if (email) {
            const validateEmail = Emailvalidator.validate(email)
            if (!validateEmail) return res.status(401).send("Invalid Email");
            loginId = { email: email }
        } else if (username) {
            loginId = { username: username }
        }
        const User = await user.findOne(loginId).select("+password")
        const verifiedPassword = await bcrypt.compare(password, User.password)
        if (!verifiedPassword) {
            res.status(404).json("Ivalid User Password")
        } else {
            const payload = { userId: User._id }
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2d" }, (err, token) => {
                if (err) {
                    res.status(500).json("error in creating a token")
                }
                res.status(200).json(token)
                console.log("hello")
            })
        }

    } catch (err) {
        console.log(err)
    }
}