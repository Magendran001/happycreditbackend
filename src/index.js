const express = require("express");
const connect = require("./config/db");
const usercontroller = require("./controller/usercontroller");
const postcontroller = require("./controller/postcontroller");
const commentcontroller = require("./controller/commentcontroller");

require('dotenv').config()

const app = express();

app.use(express.json())


app.use("/post", postcontroller);

app.use("/user", usercontroller);
app.use("/comment", commentcontroller)


app.get("/", (req, res) => {

    return res.send("welcome")

})



app.listen(process.env.PORT || 4523, async () => {

    await connect

    console.log("listening on 4523 port")

})