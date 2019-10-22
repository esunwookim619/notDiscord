import React from 'react';
import Online from './online';
import Offline from './offline';

class UserCircle extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let color;
  
    if (this.props.user.online) {
      color = <Online />
    } else {
      color = <Offline />
    }
    return (
      <div className="onlineindicator">{color}</div>
    )
  }
}

export default UserCircle;