const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    title: { type: String, required: true },
    body: { type: String, required: true },
   
    Comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }]


})


const Post = mongoose.model("post", PostSchema);

module.exports = Post