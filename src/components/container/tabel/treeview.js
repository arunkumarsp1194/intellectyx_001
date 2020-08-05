import React from 'react';
import './treeview.css'
import Form from '../form/form'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Notiflix from "notiflix-react";
import {Redirect} from "react-router-dom"

class TreeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            person:[],
            updateperson:[],
            logout:false
         }

                 axios.get(`http://localhost:3000/get_all_posts`)
                     .then(res => {
                         const persons = res.data.data;
                         this.setState({ person:persons });
                         console.log(this.state.person)
                     })
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

        handledeleteaxios = data => {
            // event.preventDefault();
            console.log("see1", data);
        
            axios.post(`http://localhost:3000/delete`,data).then(res => {
              console.log(res);
              console.log(res.data);
              axios.get(`http://localhost:3000/get_all_posts`)
                    .then(res => {
                        const persons = res.data.data;
                        this.setState({ person:[] });
                        this.setState({ person:persons });
                        console.log("updated list",this.state.person);
                         Notiflix.Notify.Success('Product Deleted Successfully');
                    })
            });
          };

          handleupdate = data => {
              
            console.log(data,"to getview");
            axios.post(`http://localhost:3000/get_item`,{"_id" :data} )
                .then(res => {
                    const uppersons = res.data;
                    this.setState({updateperson:uppersons });
                })
              }

              handlelogout = event => {
                this.setState(
                    {
                      logout : true
                    }
                );
              }

   
    render() { 
        let redirect=null;
    if(this.state.logout){
      redirect = <Redirect to="/signup" />
    }
        return ( 
            
            <div className="main-container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand custom_nav" href="#">My KART</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/" className = "href nav-link">Logout</Link></button>
    </form>
  </div>
</nav>
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Products</a></li>
    
  </ol>
</nav>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <div >

<div class="row">
<div class="col-md-6">
<table>
<thead>
<tr >
<th>Name</th>
<th>Store Name</th>
<th>Status</th>
<th>Date</th>
<th>Edit</th>
<th>Remove</th>
</tr>
</thead>
<tbody>
{this.state.person.map(person => (
<tr ><td key={person._id}>{person.name}</td>
<td key={person._id}>{person.shop_name}</td>
<td key={person._id}>{person.status}</td>
<td key={person._id}>{person.created_date}</td>
<td key={person._id}><button class="btn btn-outline-dark" onClick={this.handleupdate.bind(this, person._id)}>Edit</button></td>
<td key={person._id}><button class="btn btn-outline-dark" onClick={this.handledeleteaxios.bind(this, person._id)}>Remove</button></td>
</tr>
))}
</tbody>
</table>
</div>
<div class="col-md-6 right_cmp">
<Form user={this.state.updateperson} />
</div>
</div>



  </div>
  <div>
  <div>                 
           
            
       </div>   
      
  </div>

            </div>
         );
    }
}
 
export default TreeView;