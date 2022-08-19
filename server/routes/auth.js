const express = require("express")
const router = express.Router()
const { AuthUser } = require("../controllers/auth.js")

router.post("/login", AuthUser)

module.exports = router
