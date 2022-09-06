const User = require("../model/usermodel");
const { body, validationResult } = require('express-validator');

const express = require("express");
const router = express.Router();




router.get("", async (req, res) => {

    try {

        let user = await User.find({});

        return res.send({ user })


    } catch (error) {

        return res.send({ error: error.message })
    }
})

router.post("/signup", body('email').isEmail(), body('password').isLength({ min: 3 }), body('username').isLength({ min: 3 }), body('phone_number').isLength({ min: 10, max: 10 }), async (req, res) => {

    try {


        console.log(req.body)

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        let user = await User.create(req.body);

        return res.send({ user })


    } catch (error) {

        console.log(error)
        return res.status(400).send({ error: error.message })

    }
})




module.exports = router;