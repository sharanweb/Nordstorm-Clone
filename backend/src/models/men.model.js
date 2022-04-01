const mongoose =  require("mongoose");


const menSchema = new mongoose.Schema(
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

const Men = mongoose.model("men",menSchema);

module.exports = Men