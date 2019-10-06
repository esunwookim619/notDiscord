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
        debugger
        this.props.history.push(`/channels/${channel.channel.server_id}/${channel.channel.id}`)
      });    

    this.props.closeModal();

  }

  render() {

    return (
      <div>
        <form className="createchannelform" onSubmit={this.handleSubmit}>
        <div className="createchannelformelements">
          <div>CREATE TEXT CHANNEL</div>
          <div>in Text Channels</div>
          <label>CHANNEL TYPE</label>
          <div type="checkbox" value="Text Channel"/>
          <div type="checkbox" value="Voice Channel" />
          <label>CHANNEL NAME</label>
          <input type="text" value={this.state.channel_name} onChange={this.update("channel_name")}/>
          <button>Cancel</button>
          <input type="submit" value="Create Channel"/>
        </div>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateChannelForm);