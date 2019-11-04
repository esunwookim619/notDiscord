import React from 'react';
import { withRouter } from 'react-router-dom';
import Delete from './delete'
import ChannelItem from './channel_item';
import ChatRoomContainer from '../messages/ChatRoomContainer';
import OnlineListContainer from '../onlinelist/online_list_container';
import receiveChannels from '../../actions/channel_actions';

import Logo from '../servers/logo';
import Online from '../onlinelist/online';


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

  componentDidMount() { //Action Cable debt
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
    const first = this.pickChannels(this.props.channels)[0]; 
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
    
    if (currentServer.length > 0 && this.props.currentUser) {
      return (
        <div>
          <div className="channelsindex">
            <div className="channelservernamebox"><div className="channelservername">{currentServer[0].server_name}</div></div>
            <div>
              <div className="textchannels"><span className="chevron">⌄</span> <span className="textchannelstext">TEXT CHANNELS</span> <span className="plus"
                onMouseEnter={this.MouseHover}
                onMouseLeave={this.MouseHover}
                onClick={() => this.props.openModal('create channel')}>+</span>
                {this.state.isHovering && <div className="hoveringcreatechannel"><p className="hoveringcreatechanneltext">Create Channel</p></div>}
              </div>
            </div>
            <div className="imitatespace"></div>
            <ul>
              {channels}
            </ul>


            <div className="defaultusernamebar">
              <div className={`logobackgroundonline3 ${this.props.currentUser.avatar_color}`}><Logo num="3" /></div>
              <div className="onlineindicator3"><Online /></div>
              <div className="currentuserusername">{this.props.currentUser.username}</div>
              <svg onClick={() => this.props.openModal('edit user')}
                className="usergear" aria-hidden="false" width="22" height="22" viewBox="0 0 16 16"><path fill="#b9bbbe" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path></svg>
            </div>



          </div>
          
          <OnlineListContainer server={currentServer} />
          <ChatRoomContainer props={this.props} channels={this.props.channels} />
        </div>
      );
    } else {
      return (<div></div>);
    }
   
  }
}
  
export default withRouter(ChannelsIndex);