const mongoose =  require("mongoose");


const combiSchema = new mongoose.Schema(
    {
        img_url:{type:String, required:true},
        name:{type:String, required:true},
        brand:{type:String, required:true},
        type:{type:String, required:true},
        item:{type:Number, required:true},
        price:{type:Number, required:true},
        stprice:{type:Number, required:true},
        fabric:{type:String, required:true},
        color:{type:String, required:true},
        discount:{type:Number, required:true},

    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Combi = mongoose.model("combi",combiSchema);

module.exports = Combi;