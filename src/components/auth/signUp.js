import React, {useState} from 'react';
import {  Link } from 'react-router-dom'
import axios from 'axios';

const SignUp = () => {
  const [usersignup, setusersighup] = useState({
          username : '',
          email : '',
          password : '',
          reenterpassword : ''
  });


         
    

   const handlechange = event => {
    const {id , value} = event.target   
    setusersighup(prevState => ({
        ...prevState,
        [id] : value
      }))
  }

    const handlesubmit = event => {
      event.preventDefault();
  
      const user = {
          name: usersignup.username,
          email: usersignup.email,
          password: usersignup.password,
          cpassword: usersignup.reenterpassword

      };
      console.log("value:",user)
      axios.post(`http://localhost:3000/createusers`,  user )
          .then(res => {
              console.log(res, "working");
          })
        }

    

    
        return ( 
            <div class="card">
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img class="card__image" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80" alt=""></img>
            <div class="card__content">
            <h2 className="card__title">
              Registration Portal
            </h2>
              <div class="card__wrap">
                
                <div class="card__form">
                  <input class="card__input" type="text" id="username" placeholder="Username" value={usersignup.username} onChange={handlechange}></input>
                  <span class="card__icon">
                    
                  </span>
                  
                  <input class="card__input" type="email" id="email" placeholder="email" value={usersignup.email} onChange={handlechange}></input>
                  
          
                  <input class="card__input" type="password" id="password" placeholder="Password" value={usersignup.password} onChange={handlechange}></input>
                  <span class="card__icon1">
                    
                  </span>

                  <input class="card__input" type="password" id="reenterpassword" placeholder="re-enter Password" value={usersignup.reenterpassword} onChange={handlechange}></input>
                  <span class="card__icon1">
                    
                  </span>
                  <button type="submit" class="card__btn" onClick={handlesubmit}>Create</button>
                 
                </div>
              </div>
              <div class="card__footer">
              <button type="submit" class="card__btn" ><Link to="/" className = "href nav-link">SIGN-IN</Link></button>
              <button type="submit" class="card__btn" ><Link to="/signUp" className = "href nav-link">SIGN-UP</Link></button>
              </div>
            </div>
          
          </div>
         );
    }

 
export default SignUp;