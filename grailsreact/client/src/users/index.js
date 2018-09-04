import React, {Component} from 'react';
import config from "../config/index";
import UsersLayout from "./UsersLayout";
import User  from "./User";

class Users extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
      user: null
    }
  }

  componentDidMount() {
    fetch(`${config.SERVER_URL}/user`)
      .then(r => r.json())
      .then(json => this.setState({users: json}))
      .catch(e => console.warn(e))
  }

  selectList(event) {
    this.loadList(event.target.id);
  }
  loadList(id) {
    fetch(`${config.SERVER_URL}/user/` + id, {
      method: 'GET'
    }).then(response =>  {
      return response.json();
    }).then(json => {
      this.setState({user: json});
    });
  }


  render() {
    const {users} = this.state;
    const {match} = this.props;
    const userList = this.state.users;
    const user = this.state.user;
    const selectList = this.selectList.bind(this);
    return (
      <div className="layout">
        <UsersLayout users={users} match={match}/>

        <ul>
           {userList ? userList.map(
              function (userList) {
            return (
              <li key={ userList.id }>
                <button id={ userList.id } onClick={ selectList }>Select</button>
                { userList.username } -- { userList.firstName } { userList.lastName }
              </li>);
        }) : null}

        </ul>


        <div className="main">
          { user ? <User user={ user }/> : null }
        </div>

      </div>
        )
  }
}

export default Users;