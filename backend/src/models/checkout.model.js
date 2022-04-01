const mongoose =  require("mongoose");


const checkoutSchema = new mongoose.Schema(
    {
        email:{type:String, required:true},
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        address:{type:String, required:true},
        address1:{type:String, required:true},
        postal_code:{type:Number, required:true},
        city:{type:String, required:true},
        region:{type:String, required:true},
        phone:{type:Number, required:true},
        location:{type:String, required:true},
        cart_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"cart",
            required:false
        },
        total:{type:Number, required:true}

    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Checkout = mongoose.model("checkout",checkoutSchema);

module.exports = Checkout;