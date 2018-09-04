import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Grid } from 'react-bootstrap';
import { Navbar, NavDropdown, Nav, MenuItem } from 'react-bootstrap';

import config from './config/index';


import Users from './users/index'
import User from './users/User'


import 'whatwg-fetch';

class App extends Component {



  render() {

    return (
      <div>
        <Router>
          <div className="App">
            <Navbar style={{backgroundColor: '#424649', backgroundImage: 'none', borderRadius: 0}}>
              <Navbar.Header>
                <ul className='navbar-nav'>
                  <li><Link to="/users" className="nav-link">Users</Link></li>
                </ul>
             </Navbar.Header>
            </Navbar>
            <div className="container">
              <Route exact path="/users" component={Users} />
            </div>
          </div>
        </Router>


      </div>
    );
  }
}

export default App;
