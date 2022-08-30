const express = require("express")
const router = express.Router()
const { AuthUser } = require("../controllers/auth.js")
const { middleware } = require("../controllers/middleware")
const { getUserDetails } = require("../controllers/auth.js")


router.get("/login", middleware, getUserDetails)
router.post("/login", AuthUser)

module.exports = router