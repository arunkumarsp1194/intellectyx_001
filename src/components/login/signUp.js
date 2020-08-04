import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          username : '',
          email : '',
          password : '',
          reenterpassword : ''

         };
         
    }

    handlechange = event => {
      this.setState(
          {
              username: event.target.value
          }
      );
  }

  handlechangeemail = event => {
    this.setState(
        {
            email: event.target.value
        }
    );
}

handlechangepassword = event => {
  this.setState(
      {
        password: event.target.value
      }
  );
}

handlechangereenterpassword = event => {
  this.setState(
      {
        reenterpassword: event.target.value
      }
  );
}

    handlesubmit = event => {
      event.preventDefault();
  
      const user = {
          name: this.state.username,
          email: this.state.email,
          password: this.state.password,
          cpassword: this.state.reenterpassword

      };
      console.log("value:",user)
      axios.post(`http://localhost:3000/createusers`,  user )
          .then(res => {
              console.log(res, "working");
          })
        }

    

    render() { 
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
                  <input class="card__input" type="text" placeholder="Username" value={this.state.username} onChange={this.handlechange}></input>
                  <span class="card__icon">
                    
                  </span>
                  
                  <input class="card__input" type="email" placeholder="email" value={this.state.email} onChange={this.handlechangeemail}></input>
                  
          
                  <input class="card__input" type="password" placeholder="Password" value={this.state.password} onChange={this.handlechangepassword}></input>
                  <span class="card__icon1">
                    
                  </span>

                  <input class="card__input" type="password" placeholder="re-enter Password" value={this.state.reenterpassword} onChange={this.handlechangereenterpassword}></input>
                  <span class="card__icon1">
                    
                  </span>
                  <button type="submit" class="card__btn" onClick={this.handlesubmit}>Create</button>
                 
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
}
 
export default SignUp;