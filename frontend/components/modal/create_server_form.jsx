import React from 'react';

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
        <form onSubmit={this.handleSubmit}>
          <label>SERVER NAME
            <input type="text" value={this.state.server_name} onChange={this.update("server_name")}/>
          </label>
          <input type="submit" value="Create"/>
        </form>
      </div>
    )
  }
}

export default CreateServerForm;