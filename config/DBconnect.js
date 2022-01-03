const mongoose=require("mongoose");
const DBconnect=async ()=> {
    try {
        let result=await mongoose.connect(process.env.dburl);
        console.log("database connected");
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=DBconnect;
