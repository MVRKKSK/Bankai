const user = require("../models/user.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Emailvalidator = require("email-validator");
exports.createUser = async(req, res) => {
    try {
        const { username, email, name, password } = req.body
        const validateEmail = Emailvalidator.validate(email)
        if (!validateEmail) return res.status(401).send("Invalid Email");
        const User = new user({
            username,
            password: password,
            email: email,
            name
        })
        const saltrounds = 10
        User.password = await bcrypt.hash(password, saltrounds)
        User.save((err, data) => {
            if (err) {
                console.log(err)
                res.status(400).json({

                    err
                })
            }
            res.status(200).json(data)
        })

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