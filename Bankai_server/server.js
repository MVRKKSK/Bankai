const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000
const morgan = require("morgan")
const { readdirSync, read } = require("fs")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
dotenv.config()
const db = require("./utils/db")
db();
// const signup = require("./routes/user")
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)))
    // app.use("/api" , signup)
app.get("/", (req, res) => {
    res.send("Unleash The Bankai")
})
app.listen(PORT, (req, res) => {
    console.log("server is connected")
})






/* let allowed = ["http://localhost:3000"]

const options = (req, res) => {
    let tmp;
    let origin = req.header("Origin")
    if (allowed.indexOf(origin) > -1) {
        tmp = {
            origin: true,
            optionSuccessStatus: 200
        }
    } else {
        tmp = {
            origin: false,
        }

    }
    res(null, tmp)
} */