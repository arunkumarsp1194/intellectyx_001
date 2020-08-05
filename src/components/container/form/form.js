import React from "react";
import { useHistory, Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Notiflix from "notiflix-react";
import './form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        shopname:'',
        status:'',
        id:''
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

 componentWillReceiveProps(newProps) {    
    this.setState(
        {
            name: this.props.user.name,
            shopname: this.props.user.shop_name,
            status: this.props.user.status,
            id:this.props.user._id
        }
    );
 }

  handlechangename = event => {
    this.setState(
        {
            name: event.target.value
        }
    );
}

handlechangeshopname = event => {
  this.setState(
      {
        shopname: event.target.value
      }
  );
}

handlechangestatus = event => {
  this.setState(
      {
        status: event.target.value
      }
  );
}

  handlesubmit = event => {
    event.preventDefault();

    const user = {
        name: this.state.name,
        shop_name: this.state.shopname,
        status: this.state.status
        

    };
    console.log("value:",user)
    axios.post(`http://localhost:3000/create_public_post`,  user )
        .then(res => {
            console.log(res, "working");
            Notiflix.Notify.Success('Products saved successfully');
        })
      }

      handleupdate = event => {
        event.preventDefault();
    
        const user = {
            _id:this.state.id,
            name: this.state.name,
            shop_name: this.state.shopname,
            status: this.state.status

            
    
        };
        console.log("value:",user)
        axios.post(`http://localhost:3000/update`,  user )
            .then(res => {
                Notiflix.Notify.Success('Products Updated successfully');
            })
          }


  render() {
      
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        ></link>
        
        <div class="">
          <div class="">
            <section class="col-sm-5">
              <form>
                <div class="form-group">
                  <label for="inputName">Name</label>
                  <input
                    class="form-control"
                    type="text"
                    id="inputName "
                    value={this.state.name}
                    onChange={this.handlechangename}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="inputEmail">Shop Name</label>
                  <input
                    type="text"
                    id="inputEmail"
                    class="form-control"
                    value={this.state.shopname}
                    onChange={this.handlechangeshopname}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="inputComments">Status</label>
                  <textarea rows="4" cols="50" id="inputComments" class="form-control" value={this.state.status}
                    onChange={this.handlechangestatus}></textarea>
                </div>

                <div class="submit_align">
                  <input
                    type="submit"
                    value="Submit"
                    class="btn btn-outline-success pull-right"
                    onClick={this.handlesubmit}
                  ></input>
                  <button 
                  className="btn btn-outline-primary"
                  onClick={this.handleupdate}
                  >
                      update
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <div>
      
        </div>
      </div>
    );
  }
}

export default Form;
