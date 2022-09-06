
const Post = require("../model/postmodel");
const { body, validationResult } = require('express-validator');

const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {

    try {
        let post = await Post.find({}).populate({ path: "Comments", populate: { path: "userid", select: ["username", "email"] } }).lean().exec();


        return res.send(post)
    }
    catch (err) {
        console.log(err)
        return res.send(err)


    }




})

router.post("", body('title').isLength({ min: 3 }), body('body').isLength({ min: 5 }), async (req, res) => {


    try {
        let post = await Post.create(req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        return res.send(post)
    }
    catch (err) {

        return res.send({ err: err.message })


    }




})

module.exports = router