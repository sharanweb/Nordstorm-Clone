const express = require("express");
const router = express.Router();

const Checkout = require("../models/checkout.model");

router.get("", async(req,res)=>{
    try {
        const users = await Checkout.find().lean().exec();
        return res.status(201).send({checkout:users});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Checkout.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

module.exports = router;