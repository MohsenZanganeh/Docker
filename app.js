let express = require("express")
let mongo   = require("mongo")
const { MongoClient } = require("mongodb")
let db=new MongoClient("mongodb://host:27017/testdb")
require("dotenv").config()

let app = express()


app.get("/",async (req, res) => {
    await db.connect();

    // Establish and verify connection
    await db.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    res .send("Hello World")
})

app.listen(process.env.PORT, () => {
    console.log("Connect To server....",process.env.PORT)
}) 