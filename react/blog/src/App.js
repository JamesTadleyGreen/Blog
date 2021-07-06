import './App.css';
//import BarChart from './BarChart';
import React from 'react';
import logo from './logo.svg';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
//import { useGlobalEvent } from "beautiful-react-hooks";

//import Navbar from './Navbar.js'

// Pages
import Projects from './Projects.js';
import TimeLine from './TimeLine.js';
import About from './About.js';

// Navbar
import Navigation from './Navbar';




function App() {
  return (
    //console.log(size)
    <BrowserRouter>
      <div  className="App">
        <Navigation/>
        <Switch>                
            <Route path="/TimeLine" component={TimeLine} />
            <Route path="/about" component={About} />
            <Route exact path="/Blog" component={Projects} />
        </Switch>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
