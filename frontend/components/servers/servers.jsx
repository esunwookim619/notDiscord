import React from 'react';
import ServerItem from './server_item';
import Logo from './logo';


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
    
    return servers.filter(server => server.admin_id === this.props.currentUserId)
  }

  loggingOut() {
    this.props.logout()
      .then(() => { this.props.history.push("/") });
  }


  render() {
    let servers = this.pickServers(this.props.servers);
    if (servers.length > 0) {
      servers = servers.map(server => (
         <ServerItem key={server.id} server={server} deleteServer={this.props.deleteServer}/>
         
      ))
    } 
   
    return (
      <div className="serverindex">
        <button className="serverbutton"><Logo /></button>
        <ul className="serverul">
          {servers}
        </ul>
        <button className="addbutton" onClick={() => this.props.openModal('new server')}>+</button>

        <button className="logout" onClick={this.loggingOut}>LO</button> 

      </div>
    )

  }
}
export default Servers;