const mongoose = require("mongoose");

const singleSchema = new mongoose.Schema(
    {
        product_id: 
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"combi",
            required:false
            }
        
        
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const Single = mongoose.model("single", singleSchema);

module.exports = Single;