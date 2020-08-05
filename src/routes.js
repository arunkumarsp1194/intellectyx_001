import React from 'react';
import { Route } from 'react-router-dom'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/auth/login';
import SignUp from './components/auth/signUp';
import TreeView from './components/container/tabel/treeview';
import Form from './components/container/form/form'


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