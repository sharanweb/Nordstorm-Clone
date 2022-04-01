const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"combi",
            required:false
        },
        user_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:false
        },
        
        
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;

// name: {type:String}
        // brand:{type:String, required:true},
        // type:{type:String, required:true},
        // item:{type:Number, required:true},
        // price:{type:Number, required:true},
        // stprice:{type:Number, required:true},
        // fabric:{type:String, required:true},
        // color:{type:String, required:true},
        // discount:{type:Number, required:true},

