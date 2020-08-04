
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose =require('./db.js');
var createusersController = require('./controller/createusers');
var employeeController = require('./controller/employeeController');
var usersController = require('./controller/usersController');
var login_authController = require('./controller/login_auth');
var middleware_Controller=require('./controller/middleware_auth');
var blogpostController=require('./controller/blogpostController');
var getpublicpostControler=require('./controller/getpublicpostControler');
var delete_item=require('./controller/delete_item');
var update_item=require('./controller/update_item');
var get_item=require('./controller/get_itemdetails');
var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3001'}));
app.listen(3000,()=>console.log('server started at 3000'));
app.use('/employees',employeeController);
app.use('/users',usersController);
app.use('/createusers',createusersController);
app.use('/login_auth',login_authController);
app.use('/middleware_check',middleware_Controller);
app.use('/create_public_post',blogpostController);
app.use('/get_all_posts',getpublicpostControler);
app.use('/delete',delete_item);
app.use('/update',update_item);
app.use('/get_item',get_item);




//ashok commited