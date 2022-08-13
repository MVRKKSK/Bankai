const mongoose = require("mongoose")
const ObjectId = mongoose.ObjectId

const FollowerModel = new mongoose.Schema({
  user:{type: ObjectId , ref : "user"},
  following: {
    type: ObjectId,
    ref : "user"
  },
  followers : {
    type: ObjectId,
    ref : "user"
  }
},{timestamps: true})

module.exports = mongoose.model("followers"  ,FollowerModel)
