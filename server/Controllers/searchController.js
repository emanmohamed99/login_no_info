
const usersSearchModel = require("../Models/searchModel");
const router=require("express").Router();
const axios = require("axios")
// router.post("/", async (req, res) => {
//     var userInfo = req.body;
    
//     let foundInfo = await usersSearchModel.find({number:userInfo.number}).exec();

//     if(foundInfo.length!=0){
//         res.status(201).send("failed");
//     //     // res.status(400).send("phone Already Exist")
//     //     // foundInfo.filter((usersSearchModel => f => !usersSearchModel.has(f.value) && usersSearchModel.add(f.value))(new usersSearchModel));
//     }
//     else if(userInfo.valid==true){
//         var newC = new usersSearchModel(userInfo);
//          phone=req.body
//         await newC.save();
//         res.status(201).send(userInfo);
//     }
//   });
// var phone=""//ha5od el phone mn el user
//   router.get("http://apilayer.net/api/validate?access_key=9b4de5ad5b290cb93638a1f67713501a&number=${phone}&country_code=&format=1",async(req,res)=>{
//     var phoneInfo = req.body;
//   var newP = new usersSearchModel(phoneInfo);
//     phone=req.body
//    await newP.save();
//    res.status(201).send(phoneInfo);

//   })
//   //save phone to db
//   router.post("/",async(req,res)=>{
//     var phoneInfo = req.body;
//   var newP = new usersSearchModel(phoneInfo);
//     phone=req.body
//    await newP.save();
//    res.status(201).send(phoneInfo);

//   })
router.get("/", async (req, res) => {
  
    let alldata =await usersSearchModel.find({}).exec();
    res.status(200).send(alldata)
    }
)
//hatgeb el get mn el front w na5znha fe var w nab3tha l post db,db find by phone l eny t5zn 
// router.get("/:phone", async (req, res) => {
//     let number=req.params.phone;
//     let historyData =await usersSearchModel.find({number:number}).exec();
//     res.status(200).send(historyData)
//     })
//     router.get(`http://apilayer.net/api/validate?access_key=3a12d124bf1864eef8786bc7c8e51a02&number=${phone}&country_code=&format=1"`, async (req, res) => {
  
       
//         }
// )
router.get("/:number", async function(req, res) {
   
      const API_ACC_KEY = "9f92b8c9acd591cfe266cc3243ffa5ad";
   
      const approval = await axios.get(
        `http://apilayer.net/api/validate?access_key=${API_ACC_KEY}&number=${req.params.number}&country_code=&format=1`    
      );   
 res.status(200).send(approval.data)
 
  })
  router.post("/", async (req, res) => {
    var userInfo = req.body;
    
    let foundInfo = await usersSearchModel.find({number:userInfo.number}).exec();

    if(foundInfo.length!=0){
        res.status(201).send("failed");
    }
    else if(userInfo.valid==true){
        var newC = new usersSearchModel(userInfo);

        await newC.save();
        res.status(201).send(userInfo);
    }
  });
 
module.exports = router;



