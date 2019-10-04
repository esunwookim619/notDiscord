import React from 'react';

class ServerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
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
  }

  handleClick (e) {
    
    if (e.type === 'click') {
      //left click
    } else if (e.type === 'contextmenu') {
      this.props.deleteServer(this.props.server.id)
    }
  }
  

  render() {
    let first = this.props.server.server_name[0];
    if (first.toUpperCase() != first.toLowerCase()) {
      first = first.toUpperCase();
    } 
    let serverName = this.props.server.server_name;
    serverName = serverName.split(" ")[0];

    return (
      <div>
        <button
          onClick={this.handleClick} 
          onContextMenu={this.handleClick}
          className="serverbuttonserver"
          onMouseEnter={this.MouseHover}
          onMouseLeave={this.MouseHover}>{first}
          {this.state.isHovering && <div className="sName">{serverName}</div>}
          </button>
        
         

      </div>
    )
  }
  
}

export default ServerItem;