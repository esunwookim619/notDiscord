import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewServerContainer from './new_server_container';
import CreateServerFormContainer from './create_server_form_container';
import EditServerFormContainer from './edit_server_form_container';
import CreateChannelFormContainer from './create_channel_form_container';
import EditChannelFormContainer from './edit_channel_form_container';
import InviteFormContainer from './invite_form_container';
import JoinFormContainer from './join_server_form_container';
import EditUserFormContainer from './edit_user_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'new server':
      component = <NewServerContainer />;
      break;
    case 'create server':
      component = <CreateServerFormContainer />;
      break;
    case 'edit server':
      component = <EditServerFormContainer />;
      break;
    case 'create channel':
      component = <CreateChannelFormContainer />;
      break;
    case 'edit channel':
      component = <EditChannelFormContainer />;
      break;
    case 'invite form':
      component = <InviteFormContainer />;
      break;
    case 'join server':
      component = <JoinFormContainer />;
      break;
    case 'edit user':
      component = <EditUserFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);