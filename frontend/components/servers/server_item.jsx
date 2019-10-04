import React from 'react';
import ServerOptionsContainer from './server_options_container';

class ServerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      show: "invis",
    }
    this.MouseHover = this.MouseHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  MouseHover() {
    this.setState(this.toggleHoverState);
    this.setState({ show: "invis"});
  }

  handleClick (e) {
    e.preventDefault();
    if (e.type === 'click') {
      //
    } else if (e.type === 'contextmenu') {
      this.setState({ show: "show"});
      // this.props.deleteServer(this.props.server.id)
    }
  }
  

  render() {
    let first = this.props.server.server_name[0];
    if (first.toUpperCase() != first.toLowerCase()) {
      first = first.toUpperCase();
    } 
    let serverName = this.props.server.server_name;
    serverName = serverName.split(" ")[0];
    let menu = (
        <div className={this.state.show}>
          <ServerOptionsContainer props={this.props} />
        </div>
      )
    
    return (
      <div>
        <button
          onClick={this.handleClick} 
          onContextMenu={this.handleClick}
          className="serverbuttonserver"
          onMouseEnter={this.MouseHover}
          onMouseLeave={this.MouseHover}>{first}
          {this.state.isHovering && <div className="sName">{serverName}</div>}
          {menu}
          </button>
          
      </div>
    )
  }
  
}

export default ServerItem;