const add = (obj) => {
  return {
    type: "ADD",
    payload: obj,
  };
};

const mark = (obj) => {
  return {
    type: "MARK",
    payload: obj,
  };
};

const delall = () => {
  return {
    type: "DELALL",
  };
};

export { add, mark, delall };
