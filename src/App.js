import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter , Route } from 'react-router-dom';
import  Home   from './Home';
import  Device  from './Devices/Device';
import { Link } from "react-router-dom";


//import logo from './logo.svg';
//import './App.css';
import { Grid } from 'react-bootstrap';






class App extends Component {

    constructor(){
        super();
         this.Home = () => (
            <div>
              <h2> Home </h2>
            </div>
          );
          
        this.Airport = () => (
            <div>
               <ul>
                <li>Jomo Kenyatta</li>
                <li>Tambo</li>
                <li>Murtala Mohammed</li>
              </ul>
            </div>
          );
          
         this.City = () => (
            <div>
              <ul>
                <li>San Francisco</li>
                <li>Istanbul</li>
                <li>Tokyo</li>
              </ul>
            </div>
          );
    };
    



  render() {
    return (
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" exact component={this.Home}/>
        <Route path="/airports" component={this.Airport}/>
        <Route path="/cities" component={this.City}/>
    
     
      </div>
    );
  }
}

export default App;
