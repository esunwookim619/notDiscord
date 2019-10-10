export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: "api/users",
  })
};

export const updateUser = user => {

  return $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  })
};