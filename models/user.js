const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    email: {
        type:String,
        required :true  },
        
    // password:String  aalg se pswd pas krne ki need nhi h bcoz  passportlocalmogooose kudh  pswd bna dega'
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);
