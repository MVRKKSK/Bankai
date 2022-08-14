const express = require("express")
const user = require("./models/user.js")
const router = express.router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.get("/login" , (req ,res) => {
  const User = new user(req.body)

  User.save((err , data) => {
    if (err){
      console.log(err)
      res.status(400).json({err})
    }
    res.status(200).json({data})
  })
})
