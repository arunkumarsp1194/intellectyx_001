import React from "react";
import { useHistory, Link, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import {Redirect} from "react-router-dom"
import Notiflix from "notiflix-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : '',
      validuser : false
     
    };

  }

  componentDidMount() {
      
    // Init Notify Module
    Notiflix.Notify.Init({});
 
    // Init Report Module
    Notiflix.Report.Init({});
 
    // Init Confirm Module
    Notiflix.Confirm.Init({});
    
    // Init Loading Module
    Notiflix.Loading.Init({});    
 
    // e.g. Init Notify Module with some options
    Notiflix.Notify.Init({
      width:'300px',
      position:'right-top',
      distance:'15px',
      // ...
    });
 
  }
  

  handlechange = event => {
    this.setState(
        {
            username: event.target.value,

        }
    );
}


handlechangePassword = event => {
  this.setState(
      {
          password: event.target.value,
          
      }
  );
}
 
  handlesubmit = event => {
    event.preventDefault();

    const user = {
        email: this.state.username,
        password: this.state.password
    };
    if(this.state.username=="" || this.state.password=="")
    {
      Notiflix.Notify.Failure('Username or password cannot be empty');
    }
    else{
      // const history = useHistory();
       axios.post(`http://localhost:3000/login_auth`,  user )
           .then(res => {
               console.log(res);
               if(res['data']['valid_user']==true)
               {
                 this.setState({validuser : true})
                 Notiflix.Notify.Success('Logged in successfully');
               }
               else{
                 Notiflix.Notify.Failure('Incorrect Credentials Please Try Again');
                 
               }
           })
    }
 

}
  render() {
    let redirect=null;
    if(this.state.validuser){
      redirect = <Redirect to="/TreeView" />
    }
    

    return (
      <div class="card">
        {redirect}
        <img
          class="card__image"
          src="https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80"
          alt=""
        ></img>
        <div className="card__content">
          <div className="card__wrap">
            <h2 className="card__title">
              Login Portal
            </h2>
            <div className="card__form">
              <input
                className="card__input"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handlechange}
              ></input>
              <span className="card__icon">
                <svg
                  width="26"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>

              <input
                class="card__input"
                type="password"
                placeholder="Password"
                value ={this.state.password}
                onChange={this.handlechangePassword}
              ></input>
              <span className="card__icon1">
               
              </span>
              <button type="submit" class="card__btn" onClick={this.handlesubmit}>
                Login
              </button>
            </div>
          </div>
          <div className="card__footer">
          <button type="submit" class="card__btn" ><Link to="/" className = "href nav-link">SIGN-IN</Link></button>
              <button type="submit" class="card__btn" ><Link to="/signUp" className = "href nav-link">SIGN-UP</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
