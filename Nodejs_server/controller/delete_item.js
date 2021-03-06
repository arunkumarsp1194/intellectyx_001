const express =require('express');
var router = express.Router();
var {public_post} = require('../models/public_post');
const jwt=require('jsonwebtoken');
    router.post('/',(req,res)=>{
        console.log(req,"delete in progress");
        public_post.findOneAndDelete(req.body._id)
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            res.send({message: "Note deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });                
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.body.noteId
            });
        });
        
    });

    

    
module.exports=router;



