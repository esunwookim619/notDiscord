export const fetchDmchannels = () => {
  return $.ajax({
    method: "GET",
    url: "api/dmchannels"
  });
};

export const fetchDmchannel = id => {
  return $.ajax({
    method: "GET",
    url: `api/dmchannels/${id}`
  });
};

export const createDmchannel = dmchannel =>
  $.ajax({
    url: "api/dmchannels",
    method: "POST",
    data: { dmchannel }
  });

export const deleteDmchannel = id =>
  $.ajax({
    url: `api/dmchannels/${id}`,
    method: "DELETE"
  });
