import React, {Component} from 'react'
import {Route} from "react-router-dom";
import {array} from 'prop-types'

class UsersLayout extends Component {

  constructor() {
    super();

    this.state = {
      tab: 1
    }
  }



  switchTab(tab) {
    this.setState({tab})
  }


  render() {
    const {tab} = this.state
    const {match, header} = this.props

    return <div>
      <Route exact path={match.url}
             render={() => <div>
               <div className="jumbotron jumbotron-fluid">
                 <div className="container">
                   <h1 className="display-4">{header ? header : 'Users'} </h1>
                 </div>
               </div>


               <ul className="nav nav-tabs">
                 <li className="nav-item">
                   <span className={`nav-link ${tab === 1 ? 'active' : ''}`}
                         onClick={() => this.switchTab(1)}>AAA</span>
                 </li>
                 <li className="nav-item">
                   <span className={`nav-link ${tab === 2 ? 'active' : ''}`}
                         onClick={() => this.switchTab( 2)}>BBB</span>
                 </li>
               </ul>



             </div>}
      />
    </div>
  }
}

UsersLayout.propTypes = {
  users: array
}


export default UsersLayout