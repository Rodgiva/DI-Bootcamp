const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const find = state.tasks.find(
        (task) => task.date === action.payload.date
      );

      if (find !== undefined) {
        const tasksTemp = [...state.tasks].find(
          (task) => task.date === action.payload.date
        )
        const taskToAdd = [...tasksTemp.task, action.payload.task]
        // console.log(taskToAdd);

        console.log({ ...state, tasks: taskToAdd });

        return { ...state, tasks: taskToAdd };
        // return { ...state, tasks: [...taskToAdd.task, action.payload.task] };
      } else {
        const tasksToAdd = [...state.tasks];
        const arrayTask = [action.payload.task];
        tasksToAdd.push({
          id: tasksToAdd.length + 1,
          date: action.payload.date,
          task: arrayTask,
        });
        return { ...state, tasks: tasksToAdd };
      }

    case "GET":
      if (state.tasks.length !== 0) {
        return [...state.tasks].filter(
          (task) => task.date === action.payload.date
        );
      } else {
        return { ...state };
      }

    case "EDIT":
      return;
    //   const id = action.payload.id;
    //   const mark = action.payload.mark;
    //   const aTodoToUpdate = [...state.todoList].map((item) => {
    //     let returnVal = { ...item };
    //     if (returnVal.id === id) {
    //       returnVal.mark = mark;
    //     }
    //     console.log(returnVal);
    //     return returnVal;
    //   });

    //   return { ...state, todoList: aTodoToUpdate };
    case "DEL":
      return;
    //   return initialState;
    default:
      return { ...state };
  }
};
