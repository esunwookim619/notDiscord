import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
};

export const fetchUsers = () => dispatch => {
  return UserApiUtil.fetchUsers()
    .then(users => {
      dispatch(receiveUsers(users))
    });
}