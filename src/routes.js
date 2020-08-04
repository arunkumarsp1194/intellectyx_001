import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/login/signUp';
import TreeView from './components/homepage/treeview';
import Form from './components/homepage/form'


class Routering extends React.Component {

    
    render() {
        console.log("routes rendered")
        return (
            
                <div>
                    <Route path="/" exact component={Login} /> 
                    <Route path="/signup" component={SignUp} />
                    <Route path="/TreeView" exact component={TreeView} />
                    <Route path="/form" component={Form} />
                </div>
            

        );
    }
}

export default Routering;