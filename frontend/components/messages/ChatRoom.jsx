import React from 'react';
import MessageForm from './MessageForm';
import { receiveMessage } from '../../actions/message_actions';
import Logo from '../servers/logo';
// import GarbageCan from './garbagecan';


class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { messages: [] };
   
    this.bottom = React.createRef();
    this.getChannelName = this.getChannelName.bind(this);
    this.findUser = this.findUser.bind(this);
  }

  // componentDidUpdate(prevProps) {
  // }

  componentDidMount() {
    let receiveMessage = this.props.receiveMessage.bind(this);
    this.props.fetchMessages();
    this.props.fetchUsers();
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          // this.setState({
          //   messages: this.state.messages.concat(data.body)
          // });
          
          receiveMessage(data);
        },
        speak: function (data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  findUser(message) {
    let users = this.props.users;
    let user = [];
    if (users.length > 0) {
      user = users.filter(user => message.author_id === user.id)
    }
   
    return user;
  }

  myMessages() {
    let messages = this.props.messages;
    let channelId = this.props.currentChannelId;
   
    let mymsgs = [];
    if (messages.length > 0) {
      mymsgs = messages.filter(message => message.channel_id === channelId) 
    }
    return mymsgs;
  }

  componentDidUpdate(prevProps) {
    let myMsgs = this.myMessages();
    if (myMsgs.length > 0) {
      this.bottom.current.scrollIntoView();
    }
    
  }

  getChannelName() {
    let currentChannelId = this.props.props.currentChannelId;
    let channel = [];
   
    if (this.props.channels.length > 0) {
      channel = this.props.channels.filter(channel => channel.id === currentChannelId);
      if (channel[0]) {
        return channel[0].channel_name;
      }
      
    }
   
  }

  render() {
    let messageList;
    let myMsgs = this.myMessages();
    if (myMsgs.length > 0) {
      messageList = myMsgs.map(message => {
        let username;
        if (this.findUser(message)[0]) {
          
          username = this.findUser(message)[0].username
        }
       
        return (
          <li key={message.id}
            className="individualmessagecontainer">
            <div className="buttonandmessage">
            <button className="messageavatar"><Logo /></button> 
            <div className="usernameandmessage">
                <div className="usernameinmessage">{username} <div className="createdat">{message.created_at.slice(0, 10)}</div></div>
              <div className="individualmessage">{message.body}</div>
            </div>
             
            </div>
            
            <div ref={this.bottom} />
          </li>
        );
      });
    }
   
    
    return (
      <div>
        <div className="chattopbar"><div className="channelnameheader">{this.getChannelName()}</div></div>
        <div className="chatroom-container">
       
          <ul className="message-list">{messageList}</ul>
          </div>
          <div className="messageformcontainer">
          <MessageForm props={this.props.props} currentUserId={this.props.currentUserId} name={this.getChannelName()}/>
        </div>
      </div>
    );
  }
}

export default ChatRoom;