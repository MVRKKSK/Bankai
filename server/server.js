const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const db = require("./database/db.js")
db();
// includes for all the routers
const UserRouter = require("./routes/user.js")
const AuthRouter = require("./routes/auth.js")


const PORT = 5000
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("yosh! the server is on")
})
app.use("/api/", UserRouter)
app.use("/api/", AuthRouter)
app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT} . click here to redirect to http://localhost:${5000}`)
    console.log("Ready to Rock 🚀🚀 ")
})
