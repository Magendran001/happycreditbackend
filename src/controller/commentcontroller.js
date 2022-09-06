const Comment = require("../model/commentmodel");
const Post = require("../model/postmodel");

const express = require("express");

const router = express.Router();


router.get("/getallcomment", async (req, res) => {
    try {


        console.log(req.body)
        let comment = await Comment.find({});
        return res.send({ comment })


    }
    catch (err) {

        return res.send({ err: err.message })
    }
})

router.post("/addcomment", async (req, res) => {
    try {


        let comment = await Comment.create(req.body);


        await Post.updateOne({ _id: req.body.postId }, {
            $push: { Comments: [comment._id] }
        })



        return res.send({ comment })


    }
    catch (err) {
        console.log(err)
        return res.send({ err: err.message })
    }
})

module.exports = router;