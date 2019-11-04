import React from 'react';
import ServerItem from './server_item';
import Logo from './logo';
import Logout from './logout';
import { withRouter } from 'react-router-dom';

class Servers extends React.Component {
  constructor(props) {
    super(props);
    this.pickServers = this.pickServers.bind(this);
    this.loggingOut = this.loggingOut.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  componentDidUpdate(prevProps) {
  
    if (prevProps.history.location.pathname !== this.props.history.location.pathname) {
      this.props.fetchServers();
    }
  } 

  pickServers(servers) {
    let ownedservers =  servers.filter(server => server.admin_id === this.props.currentUserId); //doublecheck
    let joinedservers = servers.filter(server => server.memberships.includes(this.props.currentUserId));
  return ownedservers.concat(joinedservers);
}

  loggingOut() {
    this.props.logout()
      .then(() => { this.props.history.push("/") });
  }


  render() {
    let servers = this.pickServers(this.props.servers);
  
    if (servers.length > 0) {
      servers = servers.map(server => (
         <ServerItem key={server.id} server={server} deleteServer={this.props.deleteServer} updateServer={this.props.updateServer}
         openModal={this.props.openModal} currentUserId={this.props.currentUserId} servers={servers} 
        fetchServer={this.props.fetchServer}
        fetchServers={this.props.fetchServers}
         leaveServer={this.props.leaveServer}/>
         
      ))
    } 
   
    return (
      <div className="serverindex">
        
        <button onClick={() => this.props.history.push("/channels/@me")} className="serverbutton"><Logo /></button>
        <div className="serverulcontainer">
        <ul className="serverul">
          {servers}
          <button className="addbutton" onClick={() => this.props.openModal('new server')}>+</button>
        </ul>
        </div>
        <button className="logout" onClick={this.loggingOut}><Logout /></button> 

      </div>
    )

  }
}
export default withRouter(Servers);