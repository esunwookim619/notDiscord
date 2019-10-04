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

  // componentDidUpdate(prevProps) {
  //   if (prevProps.servers !== this.props.servers) {
  //     this.props.fetchServers();
  //   }
  // }     props are changing

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
         editModal={this.props.openModal}/>
         
      ))
    } 
   
    return (
      <div className="serverindex">
        <button className="serverbutton"><Logo /></button>
        <ul className="serverul">
          {servers}
        </ul>
        <button className="addbutton" onClick={() => this.props.openModal('new server')}>+</button>

        <button className="logout" onClick={this.loggingOut}><Logout /></button> 

      </div>
    )

  }
}
export default withRouter(Servers);