import React from "react";
import ServersContainer from './servers/servers_container';
import Wumpus from './wumpus';
import UserCircleContainer from './onlinelist/user_circle_container';
import FriendItemContainer from './friends/friend_item_container';
import Logo from './servers/logo';
import Online from './onlinelist/online';

import UserItemContainer from './onlinelist/user_item_container';



 class Default extends React.Component {
   constructor(props) {
     super(props)
     this.getDmchannelName = this.getDmchannelName.bind(this);
     this.currentUser = this.currentUser.bind(this);
     this.state = {
       isHovering: false,
       dmClassName:"avatarandusernamecontainer", 
       searchInput: "",
     }
     this.MouseHover = this.MouseHover.bind(this);
     this.findSub = this.findSub.bind(this);
   }

   toggleHoverState(state) {
     return {
       isHovering: !state.isHovering,
     };
   }

   findSub(arr) {
     for (let i = 0; i < arr.length; i++) {
       if (arr[i].identifier[12] === "D") {
         return arr[i];
       }
     }
   }

   MouseHover() {
     this.setState(this.toggleHoverState);
   }

   componentDidMount() {
     this.props.startLoad();
     this.props.fetchUsers();
     this.props.fetchDmchannels();
     let fetchDmchannels = this.props.fetchDmchannels.bind(this);
     let updateUser = this.props.updateUser.bind(this);
     App.sub = App.cable.subscriptions.create(
       { channel: "OnlineChannel", currentUserId: this.props.currentUserId },
       {
         received: data => {
           updateUser(data);
           fetchDmchannels();
         }
       },
       { extra: () => { } }
     );
     setTimeout(() => {
       this.props.stopLoad();
     }, 2000);
   }

   componentWillUnmount() {
     App.sub.unsubscribe();
   }


  currentUser() {
    let currentUserId = this.props.currentUserId;
    let currentUser = [];
   
    if (this.props.users.length > 0) {
      currentUser = this.props.users.filter(user => user.id === currentUserId)
    }
    return currentUser;
  }

  getDmchannelName(dmchannel) {
    let currentUser = this.currentUser();
    let user1 = [];
    let user2 = [];
    let username1;
    let username2;
    if (this.props.users.length > 0) {
      user1 = this.props.users.filter(user => user.id === dmchannel.user1_id);
      user2 = this.props.users.filter(user => user.id === dmchannel.user2_id);
      if (user1.length > 0 && user2.length > 0) {
        username1 = user1[0].username;
        username2 = user2[0].username;
      }
      if (user1.length > 0 && currentUser.length > 0) {
        if (currentUser[0].id === user1[0].id) {
          return username2;
        } else {
          return username1;
        }
      }
    }
  }

  getFriends(user) {
    if (user.length > 0) {
      return this.props.users.filter(friend => user[0].friends.includes(friend.id))
    } else {
      return [];
    }
  }

  getDmchannels() {
    let currentUserId = this.props.currentUserId;
    let dmchannels = this.props.dmchannels;
    if (dmchannels.length > 0) {
      return dmchannels.filter(dmchannel => dmchannel.user1_id === currentUserId || dmchannel.user2_id === currentUserId); 
    } else {
      return [];
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  searchUsers() {
    let currentUser = this.currentUser();
    let searchInput = this.state.searchInput;
    let searchedUsers = [];
    if (this.props.users.length > 0) {
      searchedUsers = this.props.users.filter(user => user.username.includes(searchInput) && searchInput !== "" && user.username !== currentUser[0].username)
    }
    return searchedUsers;
  }


   render() {
     let friends = this.getFriends(this.currentUser());
     let friendsitems;
     
     if (friends.length > 0) {
       friendsitems = friends.map(friend => {
         return (
           <div className="avatarandusernamecontainer" key={friend.id}>
             <div className="logobackgroundonline"><Logo num="1" /></div>
             <UserCircleContainer user={friend} />
             <FriendItemContainer user={friend} />
           </div>
         )
       })
     }
     let dmchannels = this.getDmchannels();
     let dmchannelsitems;
        if (dmchannels.length > 0) {
          dmchannelsitems = dmchannels.map(dmchannel => {
            return (
              <div className={this.state.dmClassName} key={dmchannel.id}
                onMouseEnter={this.MouseHover}
                onMouseLeave={this.MouseHover}
                onClick={() => {
                  this.MouseHover();
                  this.props.history.push(`/channels/@me/${dmchannel.id}`)}}>
                <img className="dmenvelope" src={window.message}></img>
                <div className="dmpersonname">{this.getDmchannelName(dmchannel)}</div>
                {this.state.isHovering && <img className="deletedirectmessage" 
                onClick={() => this.props.deleteDmchannel(dmchannel.id)
                  .then(() => this.props.history.push(`/channels/@me`))
                  .then(() => {
                    let subs = this.findSub(App.cable.subscriptions.subscriptions);
                    subs.unsubscribe();
                  })}
                src={window.deletemessage}></img>}
              </div>
            )
          })
        }
      if ( this.props.loading === false ) {
        let listUsers;
        let searchedUsers = this.searchUsers();
        if (searchedUsers.length > 0) {
          listUsers = searchedUsers.map(user => {
            return (
              <div className="avatarandusernamecontainer" key={user.id}>
                <div className="logobackgroundonline"><Logo num="1" /></div>
                <UserCircleContainer user={user} />
                <UserItemContainer user={user} />
              </div>
            );
          });
        } else {
          listUsers = null;
        }
        return (
          <div>
            <div className="chattopbar" />
            <ServersContainer />
            <div className="leftbar">
              <div className="leftsearchbarcontainer"><input 
              className="leftsearchbar" placeholder="Find or start a conversation" type="text" 
              value={this.state.searchInput} onChange={this.update("searchInput")}/>
              <div className="searched-users">
                <ul>
                  {listUsers}
                </ul>
              </div>
              </div>
              <div className="friendslist">
                <div className="onlinelistheading">Friends</div>
                <ul>
                  {friendsitems}
                </ul>
              </div>
              <div className="friendslist">
                <div className="onlinelistheading">Direct Messages</div>
                <ul>
                  {dmchannelsitems}
                </ul>
              </div>
              <div className="defaultusernamebar">
                <div className="logobackgroundonline3"><Logo num="3" /></div>
                <div className="onlineindicator3"><Online /></div>
                <div className="currentuserusername">{this.currentUser()[0].username}</div>
                <svg onClick={() => this.props.props.openModal('edit channel')}
                  className="usergear" aria-hidden="false" width="22" height="22" viewBox="0 0 16 16"><path fill="#b9bbbe" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path></svg>
              </div>
            </div>
            <div className="rightside">
              <div className="wumpus-container">
              <Wumpus />
              <div className="wumpuscaption">Shhhh! Wumpus is sleeping!</div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
        <div className="loading-background">
          <div className="loading-container">
            <img className="loading" src={window.loading} ></img>
          </div>
        </div>
        )}
   }
  
}
export default Default;