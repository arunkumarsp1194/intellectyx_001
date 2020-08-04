const mongoose=require('mongoose');

var public_post = mongoose.model('Products',{
    name:{type:String,},
    shop_name:{type:String,}, 
    status:{type:String,},
    created_date:{type:String,},
        
});
module.exports = {
    public_post
};