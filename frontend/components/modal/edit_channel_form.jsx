import React from 'react';
import { withRouter } from 'react-router-dom';

class EditChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.channel;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {

    return (e) => {

      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateChannel(this.state);

    this.props.closeModal();
  }

  render() {

    //same as editing a server
    return (
      <div>
        <form className="editserverform" onSubmit={this.handleSubmit}> 
          <div className="alleditele">
            <div className="editserverformheading">CHANGE CHANNELNAME</div>

            <p className="editnamelabel">CHANNELNAME</p>

            <input className="editinput" type="text" value={this.state.channel_name} onChange={this.update("channel_name")} />
            <p className="resetnamelabel" onClick={() => this.setState({ channel_name: "" })} >Reset Name</p>

          </div>
          <div className="editserverbuttons">
            <button type="button" className="cancelbutton" onClick={this.props.closeModal}>Cancel</button>
            <input className="editserver" type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditChannelForm;
