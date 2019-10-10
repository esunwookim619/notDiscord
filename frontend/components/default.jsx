import React from "react";
import ServersContainer from './servers/servers_container';
import Wumpus from './wumpus';
import UserCircleContainer from './onlinelist/user_circle_container';
import FriendItemContainer from './friends/friend_item_container';
import Logo from './servers/logo';
import Online from './onlinelist/online';

 class Default extends React.Component {
   constructor(props) {
     super(props)
   }


   componentDidMount() {
     this.props.fetchUsers();
   
   }

  currentUser() {
    let currentUserId = this.props.currentUserId;
    let currentUser = [];
   
    if (this.props.users.length > 0) {
      currentUser = this.props.users.filter(user => user.id === currentUserId)
    }
    return currentUser;
  }

  getFriends(user) {
    if (user.length > 0) {
      return this.props.users.filter(friend => user[0].friends.includes(friend.id))
    } else {
      return [];
    }
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

     return (
       <div>
         <div className="chattopbar" />
         <ServersContainer />
         <div className="leftbar">
           <div className="leftsearchbarcontainer"><input className="leftsearchbar" placeholder="Find or start a conversation" type="text"/></div>
           <div className="friendslist">
           <div className="onlinelistheading">Friends</div>
           <ul>
             {friendsitems}
           </ul>
           </div>

           <div className="defaultusernamebar">
             <div className="logobackgroundonline3"><Logo num="3" /></div>
             <div className="onlineindicator3"><Online /></div>
             <div className="currentuserusername">{this.currentUser()[0].username}</div>
           </div>
         </div>

         <div className="rightside">
           <Wumpus />
           <div className="wumpuscaption">Shhhh! Wumpus is sleeping!</div>
         </div>

       </div>
     )
   }
  
}
export default Default;