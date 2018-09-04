import React, {Component} from 'react'
import config from "../config";
import {Link} from "react-router-dom";

class User extends Component {


  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  componentDidMount() {

  }

  render() {
    const {user} = this.state;


    return user ? <div className='row'>
      <div className='col-md-12'>
        <h1>{user.username}</h1>
        <h4>roles: {user.roles}</h4>
        <p><Link to={`/roles/${user.roles.id}`} className="btn btn-primary">More from {user.roles}</Link></p>




      </div>

    </div> : <span>Loading...</span>;
  }
}


export default User;