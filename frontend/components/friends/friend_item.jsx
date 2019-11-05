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
    let dmchannel_name = this.props.user.username;
    let user1_id = this.props.currentUserId;
    let user2_id = friendId;
    let username = this.props.user.username;
    if (username.length > 12) {
      username = username.slice(0,11) + "...";
    }
    return (
      <div
        onMouseEnter={this.MouseHover}
        onMouseLeave={this.MouseHover}
        className="onlinelistusername">{username}
        {this.state.isHovering && <img
          onClick={() => this.props.deleteFriend(friendId)}
          className="addfriend" src={window.deletefriend} />}
        {this.state.isHovering && <img
          onClick={() => this.props.createDmchannel({ dmchannel_name: dmchannel_name, 
            user1_id: user1_id, user2_id: user2_id })
            .then((dmchannel) => {
              this.props.history.push(`/channels/@me/${dmchannel.dmchannel.id}`)})}
          className="directmessage" src={window.message} />}
      </div>
    )
  }
}

export default FriendItem;