import { connect } from 'react-redux';
import Dmchat from './dm_chat';
import { fetchDms, deleteDm, createDm, receiveDm } from '../../actions/dm_actions';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { fetchDmchannels } from '../../actions/dmchannel_actions';

const msp = (state, ownProps) => {

  let dmchannelId = parseInt(ownProps.match.params.dmchannelId);

  return {
    currentdmchannelId: dmchannelId,
    currentUserId: state.session.id,
    dms: Object.values(state.entities.dms),
    users: Object.values(state.entities.users),
    dmchannels: Object.values(state.entities.dmchannels)
  };
};

const mdp = dispatch => {
  return {
    fetchDmchannels: () => dispatch(fetchDmchannels()),
    fetchUsers: () => dispatch(fetchUsers()),
    receiveDm: (dm) => dispatch(receiveDm(dm)),
    fetchDms: () => dispatch(fetchDms()),
    deleteDm: (id) => dispatch(deleteDm(id)),
    createDm: (dm) => dispatch(createDm(dm))
  };
};

export default withRouter(connect(msp, mdp)(Dmchat));