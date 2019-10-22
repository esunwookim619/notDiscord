export const fetchMessages = () => {
  return $.ajax({
    method: "GET",
    url: "api/messages",
  })
};

export const createMessage = message => (
  $.ajax({
    url: 'api/messages',
    method: 'POST',
    data: { message }
  })
);

export const deleteMessage = id => (
  $.ajax({
    url: `api/messages/${id}`,
    method: 'DELETE'
  })
);
