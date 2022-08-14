const user = require("../models/user.js")
const bcrypt = require("bcrypt")
const jwt = requrie("jsonwebtoken")



exports.createUser = async (req, res) => {
  const User = await new user(req.body)
  const username = req.body.username
  try {
    const newuser = await username.findOne({username: username})
    if(newuser){
      res.status(401).json("User already exists")
    }
    return res.status(200).json("Username available")
  }
  User.save((err, data) => {
    if (err) {
      console.log(err)
      res.status(400).json({
        err
      })
    }
    res.status(200).json(data)
  })
}
