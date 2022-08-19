const user = require("../models/user.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Emailvalidator = require("email-validator");

exports.AuthUser = async(req, res) => {
    try {
        const { email, password, username} = req.body
        var loginId;
        if(email){
          const validateEmail = Emailvalidator.validate(email)
          if (!validateEmail) return res.status(401).send("Invalid Email");
          loginId = {email: email}
        }
        else if(username){
          loginId = {username: username}
        }
        const User = await user.findOne(loginId).select("+password")
        const verifiedPassword = await bcrypt.compare(password, User.password)
        if (!verifiedPassword) {
            res.status(404).json("Ivalid User Password")
        } else {
            res.status(200).json("User successfully logged in")
        }
        const payload = { userId: User._id }
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2d" }, (err, token) => {
            if (err) {
                res.status(500).json("error in creating a token")
            }
            res.status(200).json({ token })
        })
    } catch (err) {
        console.log(err)
    }
}
