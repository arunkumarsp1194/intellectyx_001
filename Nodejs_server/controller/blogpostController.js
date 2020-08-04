const express =require('express');
var router = express.Router();
var {public_post} = require('../models/public_post');
const jwt=require('jsonwebtoken');
    router.post('/',(req,res)=>{
        console.log(req.body,"result");
        var blog_record= new public_post({
            status:req.body.status,
            name:req.body.name,
            shop_name:req.body.shop_name,
            
            created_date: new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear(),
           });
           blog_record.save((err,doc)=>{
            if(!err)
            {
                 let myobj={"post_created":true};
                 res.status(200).send(myobj);
            }
            else
            { 
                 let myobj={"post_created":false};
                 res.status(200).send(myobj);
            }
        
            });
        
    });
module.exports=router;