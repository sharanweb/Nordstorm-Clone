const mongoose =  require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb+srv://test:test@cluster0.0rvp0.mongodb.net/test");
}

module.exports = connect;