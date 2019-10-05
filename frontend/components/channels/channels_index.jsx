import React from 'react';
import { withRouter } from 'react-router-dom';


class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.pickChannels = this.pickChannels.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  pickChannels(channels) {
  
    let currentServerId = this.props.currentServerId
    let a = channels.filter(channel => {
      return (
      channel.server_id === currentServerId)}); 
      
      debugger
      return a;
  }
  render() {
    const channels = this.pickChannels(this.props.channels).map(channel => {
      return (
        <div className="channelitem" key={channel.id}># {channel.channel_name}</div>
      )
    })
    
    return (
      <div className="channelsindex">
        <ul>
          {channels}
        </ul>
      </div>
    );
  }
}



  
export default withRouter(ChannelsIndex);