import React from 'react';

class Invite extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers().then(() => {
      let servers = this.props.servers;
      let server;
      for (let i = 0; i < servers.length; i++ ) {
        if (servers[i].invitation_url === this.props.invitation_url) {
          server = servers[i];
        }
      }
     
      this.props.inviteServer(server)
        .then(() => this.props.history.push(`/channels/${server.id}/${server.channels[0]}`));

    });
  }

  

  render() {
    return(
    <div>
      <div>Hi</div>
    </div>
    )}
}

export default Invite;