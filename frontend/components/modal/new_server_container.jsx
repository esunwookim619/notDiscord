import React from 'react';
import CreateServer from './createserver';
import JoinServer from './joinserver';

class NewServer extends React.Component {
  render () {
    return (
    <div className="newserver">
      <div>
        <p className="anotherserverwriting">OH, ANOTHER SERVER HUH?</p>
      </div>
      <div className="both">
        <div className="create">
          <div>
          <p className="createp">CREATE</p>
          <div className="wordbunch">
          <p className="words">Create a new server.</p>
          <p className="words">It's pretty cool!</p>
          </div>
          </div>
          <CreateServer />
            <button onClick={() => this.props.openModal('create server')} className="createmodal">Create a server</button>
        </div>
        <div className="join">
          <div>
            <p className="joinp">JOIN</p>
            <div className="wordbunch">
            <p className="words">This does NOT work </p>
            <p className="words">right now.</p>
            </div>
          </div>
          <JoinServer />
          <button className="joinmodal">Join a server</button>
        </div>
      </div>
    </div>
    );}
}



import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mdp = dispatch => {
  return {
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(NewServer);