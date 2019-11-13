import React from 'react';
import Online from './online';
import Offline from './offline';

class UserCircleFriend extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let color;
    let status;

    if (this.props.user.online) {
      color = <Online />
      status = "Online";
    } else {
      color = <Offline />
      status = "Offline";
    }
    return (
      <div className="onlineindicator2">{color} <div className="offline-online">{status}</div></div>
    )
  }
}

export default UserCircleFriend;