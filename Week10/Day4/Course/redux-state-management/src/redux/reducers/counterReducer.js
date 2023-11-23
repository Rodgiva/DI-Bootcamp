const initialState = {
  value: 100,
  todo:[]
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, value: state.value + 1 };
    case 'todolist/addtask':
        const newTodo = [...state.todo];
        newTodo.push({taskid:1,taskname:'aaa', taskdesc:' sdndnsdmbfmnsdbfm'})
        return {...state, todo: newTodo}
    default:
      return { ...state };
  }
};
