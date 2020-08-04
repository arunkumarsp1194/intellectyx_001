const express =require('express');
var router = express.Router();
var {public_post} = require('../models/public_post');
const jwt=require('jsonwebtoken');
    router.post('/',(req,res)=>{
           
        
        public_post.findOneAndUpdate(req.body._id, {
            name: req.body.name ,
            shop_name: req.body.shop_name,
            status: req.body.status,
            created_date: new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear(),
            }, {new: true})
            .then(note => {
                if(!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.body._id
                    });
                }
                res.send(note);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Note not found with id " + req.body._id
                    });                
                }
                return res.status(500).send({
                    message: "Error updating note with id " + req.body._id
                });
            });
       
        
    });

    

    
module.exports=router;



