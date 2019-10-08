import { RECEIVE_ALL_SERVER_MEMBERSHIPS, RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from "../actions/server_membership_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_SERVER_MEMBERSHIPS:
      return merge({}, state, action.servermemberships);
    case RECEIVE_SERVER_MEMBERSHIP:
      return merge({}, state, { [action.servermembership.id]: action.servermembership });
    case REMOVE_SERVER_MEMBERSHIP:
      newState = merge({}, state);
      delete newState[action.serverMembershipId];
      return newState;
    default:
      return state;
  }
};