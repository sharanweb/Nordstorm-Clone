const express = require("express");
const router = express.Router();

const Singlep = require("../models/single.model");

router.get("", async(req,res)=>{
    try {
        const combi = await Singlep.find().lean().exec();
        return res.status(201).send({sing:combi});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Singlep.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});
router.get("/:id", async(req,res)=>{
    try {
        const combi = await Singlep.findById(req.params.id).lean().exec();
        return res.status(201).send({sing:combi});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


module.exports = router;