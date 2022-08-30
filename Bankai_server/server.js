const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000
const morgan = require("morgan")
const { readdirSync, read } = require("fs")
const dotenv = require('dotenv')
dotenv.config()
const db = require("./utils/db")
db();
app.use(cors())
app.use(morgan("dev"))
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)))

app.get("/", (req, res) => {
    res.send("Unleash The Bankai")
})
app.get("/home", (req, res) => {
    res.send("yay ! you are now at home")
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