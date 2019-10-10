import React from 'react';
import UserItem from './user_item';
import UserCircleContainer from './user_circle_container';
import Logo from '../servers/logo';

class OnlineList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  pickUsers() {
    let users = [];

    let currentServer = this.props.server;
  
    if (this.props.users.length > 0) {
      if (currentServer.length > 0) {

        users = this.props.users.filter(user => currentServer[0].memberships.includes(user.id) || currentServer[0].admin_id === user.id)
      }
    }
    return users;
  }

  render() {
    let users = [];
    let myusers = [];
    if (this.props.users.length > 0) {
      users = this.pickUsers();
    }
    if (users.length > 0) {
      
      myusers = users.map(user => {
        return (
          <div className="avatarandusernamecontainer" key={user.id}>
          <div className="logobackgroundonline"><Logo num="1" /></div>
          <UserCircleContainer user={user}/>
          <UserItem user={user} />
          </div>
        )
      })
    }
    return (
      <div className="onlinelist">
        <div className="onlinelistcontainer">
        <div className="onlinelistheading">Server Users</div>
          <ul className="usersul">{myusers}</ul>
        </div>
      </div>
    )

  }


}

export default OnlineList;