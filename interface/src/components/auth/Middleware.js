const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            res.status(401).send("unauthorized")
        }
    } catch (err) {
        console.log(err)
    }
}