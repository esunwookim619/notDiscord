import { RECEIVE_ALL_DMS, RECEIVE_DM, REMOVE_DM } from "../actions/dm_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_DMS:
      return merge({}, state, action.dms);
    case RECEIVE_DM:
      newState = merge({}, state);
      delete newState[action.dm.id];
      return merge({}, newState, { [action.dm.id]: action.dm });
    case REMOVE_DM:
      newState = merge({}, state);
      delete newState[action.dmId];
      return newState;
    default:
      return state;
  }
};
