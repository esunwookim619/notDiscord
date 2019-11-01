import { START_LOAD, STOP_LOAD } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOAD:
      return true;
    case STOP_LOAD:
      return false;
    default:
      return state;
  }
};
