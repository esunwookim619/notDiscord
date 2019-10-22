export const fetchDms = () => {
  return $.ajax({
    method: "GET",
    url: "api/dms"
  });
};

export const createDm = dm =>
  $.ajax({
    url: "api/dms",
    method: "POST",
    data: { dm }
  });

export const deleteDm = id =>
  $.ajax({
    url: `api/dms/${id}`,
    method: "DELETE"
  });
