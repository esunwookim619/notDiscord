import React from 'react';
import MessageForm from './MessageForm';
import { receiveMessage } from '../../actions/message_actions';
import Logo from '../servers/logo';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
   
    this.bottom = React.createRef();
    this.getChannelName = this.getChannelName.bind(this);
    this.findUser = this.findUser.bind(this);
  }  

  componentDidMount() {
    let receiveMessage = this.props.receiveMessage.bind(this);
    this.props.fetchMessages();
    this.props.fetchUsers();
    App.cable.subscriptions.create(
      { channel: "ChatChannel", currentchannelId: this.props.match.params.channelId },
      {
        received: data => {
   
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
        let color;
        if (this.findUser(message)[0]) {
          
          username = this.findUser(message)[0].username;
          color = this.findUser(message)[0].avatar_color;
        }
        // let colors = ["red", "yellow", "green", "grey", "purple"];
        return (
          <li key={message.id}
            className="individualmessagecontainer">
            <div className="buttonandmessage">
              <button className={`messageavatar ${color}`}><Logo /></button> 
            <div className="usernameandmessage">
                <div className="usernameinmessage">{username} <div className="createdat">{message.created_at}</div></div>
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
        <div className="chattopbar"><div className="hashtagtop"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="#8e9291" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg></div>
          <div className="channelnameheader">{this.getChannelName()}</div></div>
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