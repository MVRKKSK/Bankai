const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const db = require("./database/db.js")
db();
const PORT = 5000

app.get("/" , (req , res ) => {
    res.send("yosh! the server is on")
})

app.listen(PORT , (req ,res) => {
    console.log(`server is running on port ${PORT} . click here to redirect to http://localhost:${5000}`)
})
