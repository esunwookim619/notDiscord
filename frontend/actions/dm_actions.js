import * as DmApiUtil from "../util/dm_api_util";

export const RECEIVE_ALL_DMS = "RECEIVE_ALL_DMS";
export const RECEIVE_DM = "RECEIVE_DM";
export const REMOVE_DM = "REMOVE_DM";

const receiveDms = dms => {
  return {
    type: RECEIVE_ALL_DMS,
    dms
  };
};

export const receiveDm = dm => {
  return {
    type: RECEIVE_DM,
    dm
  };
};

const removeDm = dm => {
  return {
    type: REMOVE_DM,
    dmId: dm.id
  };
};

export const fetchDms = () => dispatch => {
  return DmApiUtil.fetchDms().then(dms => {
    dispatch(receiveDms(dms));
  });
};

export const createDm = dm => dispatch => {
  return DmApiUtil.createDm(dm).then(dm =>
    dispatch(receiveDm(dm))
  );
};

export const deleteDm = id => dispatch => {
  return DmApiUtil.deleteDm(id).then(dm =>
    dispatch(removeDm(dm))
  );
};
