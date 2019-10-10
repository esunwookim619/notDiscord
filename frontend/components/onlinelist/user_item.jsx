import React from 'react';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="onlinelistusername">{this.props.user.username}</div>
    )
  }
}

export default UserItem;