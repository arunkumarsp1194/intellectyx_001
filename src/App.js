import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routering from './routes';
import TreeView from './components/homepage/treeview'



function App() {
  return (
    <div className="App">
      <Router>
   <div>
 
   <Routering />
   </div>
  
   </Router>
   
    </div>
  );
}

export default App;
