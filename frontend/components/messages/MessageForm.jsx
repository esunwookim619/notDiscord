import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
   
    this.currentChannelId = this.props.props.currentChannelId;
    this.currentUserId = this.props.currentUserId;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  findIndex(arr) {
    let result;
 
    if (arr[0].identifier[12] === "O") {
      result = 1;
    } else {
      result = 0;
    }
    return result;
  }

  handleSubmit(e) {
    e.preventDefault();
    let index = this.findIndex(App.cable.subscriptions.subscriptions);
    App.cable.subscriptions.subscriptions[index].speak({ body: this.state.body, channel_id: this.props.props.match.params.channelId, author_id: this.currentUserId});
    this.setState({ body: "" });
  }

  render() {
    return (
      <div>
        <form className="messageform"onSubmit={this.handleSubmit}>
          <div className="messageforminput">
          <button className="messageforminputbutton"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg></button>
          <input
            className="messageforminputtext"
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder={`Message #${this.props.name}`}
          />
          </div>
          <input className="messagesubmit" type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;