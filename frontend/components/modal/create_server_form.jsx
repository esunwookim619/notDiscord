import React from 'react';
import Flag from './flag';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server_name: this.props.server.server_name,
      admin_id: this.props.currentUserId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  update(field) {
    return (e) => {
     
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state);
    this.props.closeModal();
  }

  render() {
    
    return (
      <div>
        <form className="createserveform" onSubmit={this.handleSubmit}>
          <div className="createserverheading">CREATE YOUR SERVER</div>
          <div className="createserverwords">By creating a server, you won't have access to voice chat.</div>
          <div className="createserverwords">You can't text chat yet either. Sucks...</div>
          
          <div className="serverinnerform">
            <label className="createserverlabel">SERVER NAME</label>
            <input className="nameinput" type="text" value={this.state.server_name} onChange={this.update("server_name")}/>
          
          <div className="region">SERVER REGION</div>
            <div className="regioncontainer"><Flag /> <p className="US">US East</p><button className="cantchange">Can't Change</button></div>
          </div>
          <div className="serverbuttoncontainer">
          <button className="back" onClick={() => this.props.openModal('new server')}>GO BACK</button>
          <input className="makeserver" type="submit" value="Create"/>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateServerForm;