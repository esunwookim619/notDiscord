import React from 'react';

class EditServerForm extends React.Component {
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

      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
 
    this.props.updateServer(this.state);
    this.props.closeModal();
  }

  render() {

    return (
      <div>
        <form className="editserverform" onSubmit={this.handleSubmit}>
            <div className="alleditele">
            <div className="editserverformheading">CHANGE SERVERNAME</div>

            <p className="editnamelabel">SERVERNAME</p>

            <input className="editinput" type="text" value={this.state.server_name} onChange={this.update("server_name")}/>
            <p onClick={() => this.setState({ server_name: ""})} className="resetnamelabel">Reset Name</p> 
            
          </div>
          <div className="editserverbuttons">
            <button className="cancelbutton" onClick={this.props.closeModal}>Cancel</button>
            <input className="editserver" type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditServerForm;