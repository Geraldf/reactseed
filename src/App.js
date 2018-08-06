import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter , Route } from 'react-router-dom';
import  Home   from './Home';
import  Device  from './Devices/Device';


//import logo from './logo.svg';
//import './App.css';
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
        <header className="App-header">
        <BrowserRouter>
        <Route render={({ location, history }) => (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="devices">
                            <NavIcon>
                                <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Devices
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <main>
                    <Route path="/" exact component={props => <App />} />
                    <Route path="/home" component={props => <Home />} />
                    <Route path="/devices" component={props => <Device />} />
                </main>
            </React.Fragment>
        )}
        />
    </BrowserRouter>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </Grid>
      </div>
    );
  }
}

export default App;
