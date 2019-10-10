import React from 'react';

class FriendItem extends React.Component {
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
    let friendId = this.props.user.id;
   
    return (
      <div
        onMouseEnter={this.MouseHover}
        onMouseLeave={this.MouseHover}
        className="onlinelistusername">{this.props.user.username}
        {this.state.isHovering && <img
          onClick={() => this.props.deleteFriend(friendId)}
          className="addfriend" src={window.deletefriend} />}
      </div>
    )
  }
}

export default FriendItem;