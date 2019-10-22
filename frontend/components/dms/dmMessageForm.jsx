import React from "react";

class DmMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };

    this.currentdmchannelId = this.props.currentdmchannelId;
    this.currentUserId = this.props.currentUserId;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  findSub(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].identifier[12] === "D")  {
        return arr[i];
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let sub = this.findSub(App.cable.subscriptions.subscriptions);
  
    sub.speak({ body: this.state.body, dmchannel_id: this.props.props.match.params.dmchannelId, author_id: this.currentUserId });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div>
        <form className="messageform" onSubmit={this.handleSubmit}>
          <div className="messageforminput">
            <button className="messageforminputbutton"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg></button>
            <input
              className="messageforminputtext"
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder={`Message @${this.props.name}`}
            />
          </div>
          <input className="messagesubmit" type="submit" />
        </form>
      </div>
    );
  }
}

export default DmMessageForm;