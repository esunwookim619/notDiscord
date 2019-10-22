import * as DmchannelApiUtil from "../util/dmchannel_api_util";

export const RECEIVE_ALL_DMCHANNELS = "RECEIVE_ALL_DMCHANNELS";
export const RECEIVE_DMCHANNEL = "RECEIVE_DMCHANNEL";
export const REMOVE_DMCHANNEL = "REMOVE_DMCHANNEL";

const receiveDmchannels = dmchannels => {
  return {
    type: RECEIVE_ALL_DMCHANNELS,
    dmchannels
  };
};

export const receiveDmchannel = dmchannel => {
  return {
    type: RECEIVE_DMCHANNEL,
    dmchannel
  };
};

const removeDmchannel = dmchannel => {
  return {
    type: REMOVE_DMCHANNEL,
    dmchannelId: dmchannel.id
  };
};

export const fetchDmchannels = () => dispatch => {
  return DmchannelApiUtil.fetchDmchannels().then(dmchannels =>
    dispatch(receiveDmchannels(dmchannels))
  );
};

export const fetchDmchannel = id => dispatch => {
  return DmchannelApiUtil.fetchDmchannel(id).then(dmchannel =>
    dispatch(receiveDmchannel(dmchannel))
  );
};

export const createDmchannel = dmchannel => dispatch => {
  return DmchannelApiUtil.createDmchannel(dmchannel).then(dmchannel =>
    dispatch(receiveDmchannel(dmchannel))
  );
};

export const deleteDmchannel = id => dispatch => {
  return DmchannelApiUtil.deleteDmchannel(id).then(dmchannel =>
    dispatch(removeDmchannel(dmchannel))
  );
};
