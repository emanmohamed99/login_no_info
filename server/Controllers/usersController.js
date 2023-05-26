
const usersAuthModel = require("../Models/usersAuthModel");
const bcrypt= require("bcrypt");

var RegisterNewUser = async(req,res)=>{
    //Logic Connect with DB [Model]==>execution
    //if user Exist ?=>u already Registerd =>Please Login
    //else ==> add
    var newUser = req.body;
    //get Data From DB
    let foundUser = await usersAuthModel.find({email:newUser.email}).exec();//null
    // console.log(foundUser)
    // if(foundUser.length!=0){
    //     //Please Login
    //     res.status(400).send("User Already Exist, Please Login Now")
    // }
   
        //Add
        var HashedPassword = await bcrypt.hash(newUser.password,10);
        newUser.password = HashedPassword;
        var newU = new usersAuthModel(newUser);
        await newU.save();
        res.status(201).send("Created Successfully");
    }


module.exports = RegisterNewUser;





//CRUD [Courses] ==> Mongoose
/**
 * Model-Controller
 */