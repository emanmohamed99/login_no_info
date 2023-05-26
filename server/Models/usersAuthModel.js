
const mongoose = require("mongoose");
const validator = require("validator");

// const DB_URL = "mongodb://127.0.0.1:27017/Users";

// mongoose.connect(DB_URL, {useNewUrlParser:true});

var usersSchema = {
    email:{
        type:String,
    },
    password:{type:String,minlength:5}
}


module.exports=mongoose.model("Auth",usersSchema);

// var creditCardCustomers = mongoose.model("Auth",usersSchema);
// var c = new creditCardCustomers({})
// c.save()