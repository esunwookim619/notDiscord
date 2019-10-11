import React from 'react';
import { withRouter } from 'react-router-dom';

class JoinServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
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
    this.props.history.push(`${this.state.url.slice(29)}`);
    this.props.closeModal();
  }

  render() {

    return (
      <div>
        <form className="createserveform" onSubmit={this.handleSubmit}>
          <div className="joinserverheading">JOIN A SERVER</div>
          <div className="spacekiller"></div>
          <div className="createserverwords">Enter an invite below to join an existing server.</div>
          <div className="createserverwords">The invite will look NOTHING like this:</div>
          <div className="spacekiller2"></div>
          <div className="nonsenseurl">https://omgiwonthelottery.gg/DFIOSF</div> 
          <div className="nonsenseurl">https://ineedtouseupspacelalalalalla.gg/</div>
          <div className="nonsenseurl">DFHSFL</div> 
          <div className="serverinnerform">
            
            <input className="joininput" type="text" value={this.state.url} onChange={this.update("url")} />
            <label className="joinserverlabel">Enter an invite</label>
          </div>
          <div className="serverbuttoncontainer2">
            <button className="back2" onClick={() => this.props.openModal('new server')}>GO BACK</button>
            <input className="joinserver" type="submit" value="Join" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(JoinServerForm);