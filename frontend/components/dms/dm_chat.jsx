import React from 'react';
import DmMessageForm from './dmMessageForm';
import { receiveDm } from '../../actions/dm_actions';
import Logo from '../servers/logo';

class DmChat extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef(); 
    this.getDmchannelName = this.getDmchannelName.bind(this);
    this.findUser = this.findUser.bind(this);
    this.findReceiver = this.findReceiver.bind(this);
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


  componentDidMount() {
    let receiveDm = this.props.receiveDm.bind(this);
    let updateUser = this.props.updateUser.bind(this);
    this.props.fetchDms();
    this.props.fetchUsers();
    this.props.fetchDmchannels();
   
    App.cable.subscriptions.create(
      { channel: "DmchatChannel", currentdmchannelId: this.props.match.params.dmchannelId },
      {
        received: data => {
          if (data.id) {
            receiveDm(data);
          } else {
            window.alert("This chatroom no longer exists. Please refresh the page.");
          }
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
      }
    );
  }

  findUser(dm) {
    let users = this.props.users;
    let user = [];
    if (users.length > 0) {
      user = users.filter(user => dm.author_id === user.id)
    }
    return user;
  }

  findReceiver(data) {
    let users = this.props.users;
    let user = [];
    if (users.length > 0) {
      user = users.filter(user => data.receiver_id === user.id)
    }
    return user;
  }

  myDms() {
    let dms = this.props.dms;
    let dmchannelId = this.props.currentdmchannelId;

    let mydms = [];
    if (dms.length > 0) {
      mydms = dms.filter(dm => dm.dmchannel_id === dmchannelId)
    }
    return mydms;
  }

  componentDidUpdate(prevProps) {
    let myDms = this.myDms();
    
    if (myDms.length > 0 && (prevProps.dms.length !== this.props.dms.length)) {
      this.bottom.current.scrollIntoView();
    }
  }

  getDmchannelName() {
    let currentdmchannelId = this.props.currentdmchannelId;
    let dmchannel = [];
    let user1 = [];
    let user2 = [];
    let username1;
    let username2;
    let currentUser = [];
    if (this.props.users.length > 0) {
      currentUser = this.props.users.filter(user => user.id === this.props.currentUserId);
    }
    if (this.props.dmchannels.length > 0) {
      dmchannel = this.props.dmchannels.filter(dmchannel => dmchannel.id === currentdmchannelId);
      if (dmchannel[0]) {
        if (this.props.users.length > 0) {
          user1 = this.props.users.filter(user => user.id === dmchannel[0].user1_id);
          user2 = this.props.users.filter(user => user.id === dmchannel[0].user2_id);
          if (user1.length > 0 && user2.length > 0) {
            username1 = user1[0].username;
            username2 = user2[0].username;
          }
        }
        if (user1.length > 0) {
          if (currentUser[0].id === user1[0].id) {
            return username2;
          } else {
            return username1;
          }
        }
      }
    }
  }

  timeFormat(jsonTime) {
    let datetime = new Date(JSON.parse(`\"` + jsonTime + `\"`));
    let hours = datetime.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = datetime.getMinutes();
    if (minutes < 10) { minutes = `0${ minutes }` }
      return hours + ":" + minutes + ampm
  }

  render() {
    let dmList = [];
    let currentdmchannel = [];
    if (this.props.dmchannels.length > 0) {
      currentdmchannel = this.props.dmchannels.filter(dmchannel => dmchannel.id === this.props.currentdmchannelId)
    }
    let myDms = this.myDms();
    if (myDms.length > 0) {
      dmList = myDms.map(dm => {
        let username;
        let color;
        let time;
        if (this.findUser(dm)[0]) {
          username = this.findUser(dm)[0].username;
          color = this.findUser(dm)[0].avatar_color;
          time = this.timeFormat(dm.created_at);

        }

        return (
          <li key={dm.id}
            className="individualmessagecontainer"
            onMouseEnter={this.MouseHover}
            onMouseLeave={this.MouseHover}>
            <div className="buttonandmessage">
              <button className={`messageavatar ${color}`}><Logo /></button>
              <div className="usernameandmessage">
                <div className="usernameinmessage">{username} <div className="createdat">{time}</div></div>
                <div className="individualmessage">{dm.body}</div>
                {/* {this.state.isHovering && <img className="deletedmicon"
                  onClick={() => {
                    this.MouseHover();
                    this.props.deleteDm(dm.id)}}
                  src={window.deletemessage}></img>} */}
              </div>

            </div>

            <div ref={this.bottom} />
          </li>
        );
      });
    }
    if (dmList.length > 50) {
      let length = dmList.length;
      dmList = dmList.slice(length - 50);
    }
    return (
      <div>
        <div className="chattopbar"><div className="atsymbol"><svg x="0" y="0" name="Nova_At" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="#72767d" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg></div>
          <div className="channelnameheader">{this.getDmchannelName()}</div></div>
        <div className="chatroom-container2">

          <ul className="message-list">{dmList}</ul>
        </div>
        <div className="messageformcontainer2"> 
          <DmMessageForm currentUserId={this.props.currentUserId} 
          name={this.getDmchannelName()} 
          props={this.props}
          currentdmchannel={currentdmchannel}/>
        </div>
      </div>
    );
  }
}

export default DmChat;