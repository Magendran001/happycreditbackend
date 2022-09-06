const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({


    postId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "post" },

    body: { type: String, required: true },

    userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" }


})


const comment = mongoose.model("comment", commentSchema);
module.exports = comment