

export const fetchServerMemberships = () => {
  return $.ajax({
    method: "GET",
    url: "api/server_memberships",
  })
};

// export const fetchServerMembership = id => {
//   return $.ajax({
//     method: "GET",
//     url: `api/server_membership/${id}`,
//   })
// };

// export const createServerMembership = servermembership => (
//   $.ajax({
//     url: 'api/server_memberships',
//     method: 'POST',
//     data: { servermembership }
//   })
// );

export const updateServerMembership = servermembership => {

  return $.ajax({
    url: `api/server_memberships/${servermembership.id}`,
    method: 'PATCH',
    data: { servermembership }
  })
};

export const deleteServerMembership = id => (
  $.ajax({
    url: `api/server_memberships/${id}`,
    method: 'DELETE'
  })
);

