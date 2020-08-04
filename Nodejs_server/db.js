const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.nlyq9.mongodb.net/CurdDB',(err)=>{
 if(!err)
 {
console.log("MongoDB connection successed..");
 }
 else{
console.log("Error in connection :"+JSON.stringify(err,undefined,2));

 }
});
module.exports=mongoose;