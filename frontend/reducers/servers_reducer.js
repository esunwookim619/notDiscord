import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_SERVERS:
      return merge({}, state, action.servers);
    case RECEIVE_SERVER:
      newState = merge({}, state);
      delete newState[action.server.id];
      return merge({}, newState, { [action.server.id]: action.server});
    case REMOVE_SERVER:
      newState = merge({}, state);
      delete newState[action.serverId];
      return newState;
    default:
      return state;
  }
};