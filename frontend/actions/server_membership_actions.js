import * as ServerMembershipApiUtil from "../util/server_membership_api_util";

export const RECEIVE_ALL_SERVER_MEMBERSHIPS = "RECEIVE_ALL_SERVER_MEMBERSHIPS";
export const RECEIVE_SERVER_MEMBERSHIP = "RECEIVE_SERVER_MEMBERSHIP";
export const REMOVE_SERVER_MEMBERSHIP = "REMOVE_SERVER_MEMBERSHIP";

const receiveServerMemberships = (serverMemberships) => {
  return {
    type: RECEIVE_ALL_SERVER_MEMBERSHIPS,
    serverMemberships
  }
};

const receiveServerMembership = (serverMembership) => {
  return {
    type: RECEIVE_SERVER_MEMBERSHIP,
    serverMembership
  }
};

const removeServerMembership = (serverMembership) => {
  return {
    type: REMOVE_SERVER_MEMBERSHIP,
    serverMembershipId: serverMembership.id
  }
};

export const fetchServerMemberships = () => dispatch => {
  
  return ServerMembershipApiUtil.fetchServerMemberships()
    .then(servermemberships => {
      
      dispatch(receiveServerMemberships(servermemberships))});
}

// export const createServerMembership = (servermembership) => dispatch => {
//   return ServerMembershipApiUtil.createServerMembership(servermembership)
//     .then(servermembership => dispatch(receiveServerMembership(servermembership)));
// }

export const updateServerMembership = (servermembership) => dispatch => {

  return ServerMembershipApiUtil.updateServerMembership(servermembership)
    .then(servermembership => dispatch(receiveServerMembership(servermembership)));
}

export const deleteServerMembership = (id) => dispatch => {
  return ServerMembershipApiUtil.deleteServerMembership(id)
    .then(servermembership => dispatch(removeServerMembership(servermembership)));
}

