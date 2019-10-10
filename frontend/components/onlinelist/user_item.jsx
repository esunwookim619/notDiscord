import React from 'react';

class UserItem extends React.Component {
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
        {this.state.isHovering && this.props.user.id !== this.props.currentUserId && <img 
        onClick={() => this.props.makeFriend(friendId)}
        className="addfriend" src={window.addfriend} />}
      </div>
    )
  }
}

export default UserItem;