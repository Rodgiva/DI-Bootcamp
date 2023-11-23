const initialState = {
  todoList: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const aTodoToAdd = [...state.todoList];
      aTodoToAdd.push(action.payload);
      return { ...state, todoList: aTodoToAdd };
    case "MARK":
      const id = action.payload.id;
      const mark = action.payload.mark;
      const aTodoToUpdate = [...state.todoList].map((item) => {
        let returnVal = { ...item };
        if (returnVal.id === id) {
          returnVal.mark = mark;
        }
        console.log(returnVal);
        return returnVal;
      });
      return { ...state, todoList: aTodoToUpdate };
    case "DELALL":
      return initialState;
    default:
      return { ...state };
  }
};
