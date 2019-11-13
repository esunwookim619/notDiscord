import React from 'react';

class FriendItemDm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }
    this.MouseHover = this.MouseHover.bind(this);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  MouseHover() {
    this.setState(this.toggleHoverState);
  }
  render() {
  
  
    let username = this.props.user.username;
    if (username.length > 12) {
      username = username.slice(0, 11) + "...";
    }
    return (
      <div
     
        className="onlinelistusername">{username}
       
      </div>
    )
  }
}

export default FriendItemDm;