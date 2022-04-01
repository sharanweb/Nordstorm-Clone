const express = require("express");
const router = express.Router();

const Women = require("../models/women.model");

router.get("", async(req,res)=>{
    try {
        const users = await Women.find().lean().exec();
        return res.status(201).send({womens:users});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Women.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

module.exports = router;