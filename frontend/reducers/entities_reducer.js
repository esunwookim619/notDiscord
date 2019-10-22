import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import dmchannelsReducer from "./dmchannels_reducer";
import dmsReducer from "./dms_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  dmchannels: dmchannelsReducer,
  dms: dmsReducer
});

export default entitiesReducer;