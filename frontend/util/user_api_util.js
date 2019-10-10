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

export const makeFriend = friend => {
  return $.ajax({
    url: `api/makefriends/${friend}`,
    method: 'GET',
  })
}

export const deleteFriend = friend => {
  return $.ajax({
    url: `api/destroyfriends/${friend}`,
    method: 'GET',
  })
}