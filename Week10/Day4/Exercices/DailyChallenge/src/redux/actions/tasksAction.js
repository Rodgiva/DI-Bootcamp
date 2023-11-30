const add = (obj) => {
  return {
    type: "ADD",
    payload: obj,
  };
};

const get = (obj) => {
  return {
    type: "GET",
    payload: obj,
  };
};

const edit = (obj) => {
  return {
    type: "EDIT",
    payload: obj,
  };
};

const del = (obj) => {
  return {
    type: "DEL",
    payload: obj,
  };
};

export { add, get, edit, del };
