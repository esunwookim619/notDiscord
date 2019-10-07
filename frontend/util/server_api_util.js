export const fetchServers = () => {
  return $.ajax({
    method: "GET",
    url: "api/servers",
  })
};

// export const fetchServer = id => {
//   return $.ajax({
//     method: "GET",
//     url: `api/servers/${id}`,
//   })
// };

export const createServer = server => (
  $.ajax({
    url: 'api/servers',
    method: 'POST',
    data: { server }
  })
);

export const updateServer = server => {
  
  return $.ajax({
    url: `api/servers/${server.id}`,
    method: 'PATCH',
    data: { server }
  })
};

export const deleteServer = id => (
  $.ajax({
    url: `api/servers/${id}`,
    method: 'DELETE'
  })
);