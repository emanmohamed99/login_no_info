
const mongoose = require("mongoose");


var usersSchema = {
    "valid": Boolean,
    "number": String,
    "local_format": String,
    "international_format":String ,
    "country_prefix":String ,
    "country_code":String ,
    "country_name":String ,
    "location":String ,
    "carrier":String ,
    "line_type": String 


   

}


module.exports=mongoose.model("search",usersSchema);