import './App.css';
//import BarChart from './BarChart';
import React from 'react';
import logo from './logo.svg';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
//import { useGlobalEvent } from "beautiful-react-hooks";

// Pages
import Projects from './Projects.js';
import About from './About.js';




function App() {
  return (
    //console.log(size)
    <BrowserRouter>
      <div className="App">
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo" width="50" height="50"/>
          <div className="navigation-sub">
                                          
            {/* Set up the Links */}
            <Link to="/Blog" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>

        {/* Set up the Router */}
        <Route exact path="/Blog" component={Projects} />
        <Route path="/about" component={About} />
  
      </div>
    </BrowserRouter>
  );
}

export default App;
