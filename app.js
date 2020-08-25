let express = require("express")
require("dotenv").config()
let app = express()
app.get("/", (req, res) => {
    res .send("Hello World")
})
app.listen(process.env.PORT, () => {
    console.log("Connect To server....",process.env.PORT)
}) 