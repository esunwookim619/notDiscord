import React from 'react';
import { withRouter } from 'react-router-dom';
import Delete from './delete'
import ChannelItem from './channel_item';
import ChatRoom from '../../ChatRoom.js';


class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.pickChannels = this.pickChannels.bind(this);
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
    this.props.fetchServers();
    this.props.fetchChannels();
  }

  componentDidUpdate(prevProps) {
    
  if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
    this.props.fetchChannels();
    } 
  }

  pickChannels(channels) {
  
    let currentServerId = this.props.currentServerId;
    let ownchannels = channels.filter(channel => {
      return (
      channel.server_id === currentServerId)}); 
      return ownchannels;
  }
  render() {
    const first = this.pickChannels(this.props.channels)[0]; //doesn't work if you delete the first channel for pushing
    const pickedc = this.pickChannels(this.props.channels);
    const channels = this.pickChannels(this.props.channels).map(channel => {
      return (
        <ChannelItem key={channel.id} first={first} channels={pickedc} props={this.props} channel={channel} />

      )
    })
    let currentServerId = this.props.currentServerId;
    let currentServer = this.props.servers.filter(server => {
      return (
        server.id === currentServerId)});
    if (currentServer.length > 0) {
      currentServer = currentServer[0].server_name;
    }
    
    return (
      <div>
      <div className="channelsindex">
        <div className="channelservernamebox"><div className="channelservername">{currentServer}</div></div>
        <div>
          <div className="textchannels"><span className="chevron">⌄</span> <span className="textchannelstext">TEXT CHANNELS</span> <span className="plus" 
          onMouseEnter={this.MouseHover}
          onMouseLeave={this.MouseHover}
          onClick={() => this.props.openModal('create channel')}>+</span>
          {this.state.isHovering && <div className="hoveringcreatechannel"><p className="hoveringcreatechanneltext">Create Channel</p></div> }
          </div>
        </div>
        <div className="imitatespace"></div>
        <ul>
          {channels}
        </ul>
      </div>
      {/* <ChatRoom /> */}
      
      </div>
    );
  }
}
  
export default withRouter(ChannelsIndex);