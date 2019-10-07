import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_name: "",
      server_id: this.props.currentServerId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state)
      .then((channel) => {
        this.props.history.push(`/channels/${channel.channel.server_id}/${channel.channel.id}`)
      });    

    this.props.closeModal();

  }

  render() {

    return (
      <div>
        <div className="createchannelform" >
        <div className="createchannelformelements">
          <div className="createchannelformheader">create text channel</div>
          <div className="createchannelformsubheader">in Text Channels</div>
          <label className="channeltypelabel">CHANNEL TYPE</label>
          <button className="textcheckbox">
              <label className="tcb"> 
              <input type="checkbox"/>
              <span className="checkmark"></span>
              </label>
              <svg className="checkhash" width="24" height="24" viewBox="0 0 24 24"><path fill="#acadaf" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg> 
              <div className="tcbdesc">Text Channel</div>
          </button>
          
            <button className="voicecheckbox">
              <label className="vcb">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <svg className="checkspeaker" background="background-6FOJIb" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"></path></svg>
              <div className="tcbdesc">Voice Channel (Under Construction)</div>
            </button>
          </div>
          <form className="createchannelinputform" onSubmit={this.handleSubmit}>
          <div className="createchannelmidcontainer">
          <label className="createchannellabel">CHANNEL NAME</label>
          <input className="createchannelinput" type="text" value={this.state.channel_name} onChange={this.update("channel_name")}/>
          </div>
          <div className="createchannelbottom">
          <button type="button" onClick={this.props.closeModal} className="createchannelcancel">Cancel</button>
          <input className="createchannelinputbutton" type="submit" value="Create Channel"/>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateChannelForm);