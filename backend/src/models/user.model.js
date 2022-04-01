const mongoose =  require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String, required:true},

    },
    {
        versionKey:false,
        timestamps:true
    }
);

userSchema.pre("save", function (next) {  //readymade hook in mongoose its a middleware
    //let modifiedPassword = this.passowrd + xyz;
    //this.password  = modifedPassword;
    
      if (!this.isModified("password")) return next();
    
      // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
      // salt
      // hashing rounds =>
      var hash = bcrypt.hashSync(this.password, 8);
      this.password = hash;
      return next();
    });
    
    userSchema.methods.checkPassword = function (password) {    //method
      return bcrypt.compareSync(password, this.password);
    };

const User = mongoose.model("user",userSchema);

module.exports = User;