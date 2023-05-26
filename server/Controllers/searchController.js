
const usersSearchModel = require("../Models/searchModel");
const router=require("express").Router();

router.post("/", async (req, res) => {
    var userInfo = req.body;
    
    let foundInfo = await usersSearchModel.find({number:userInfo.number}).exec();

    if(foundInfo.length!=0){
        res.status(201).send("failed");
    //     // res.status(400).send("phone Already Exist")
    //     // foundInfo.filter((usersSearchModel => f => !usersSearchModel.has(f.value) && usersSearchModel.add(f.value))(new usersSearchModel));
    }
    else if(userInfo.valid==true){
        var newC = new usersSearchModel(userInfo);
         phone=req.body
        await newC.save();
        res.status(201).send(userInfo);
    }
  });

//   router.get("http://apilayer.net/api/validate?access_key=9b4de5ad5b290cb93638a1f67713501a&number=${phone}&country_code=&format=1",async(req,res)=>{
//         let historyData =await usersSearchModel.find({}).exec();
//         res.status(200).send(historyData)

//   })
router.get("/", async (req, res) => {
  
    let alldata =await usersSearchModel.find({}).exec();
    res.status(200).send(alldata)
    }
)
//hatgeb el get mn el front w na5znha fe var w nab3tha l post db,db find by phone l eny t5zn 
router.get("/:phone", async (req, res) => {
    let number=req.params.phone;
    let historyData =await usersSearchModel.find({number:number}).exec();
    res.status(200).send(historyData)
    }
)
module.exports = router;



