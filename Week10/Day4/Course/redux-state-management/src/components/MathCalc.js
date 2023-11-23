import { useState, useReducer } from "react";

export const initState = {
  result: 33,
  name: "DanDan",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, result: state.result + 1, name: "Add" };
    case "MINUS":
      return { ...state, result: state.result - 1 };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "MULTIPLE":
      return { ...state, result: state.result * 2 };
    case "DIVIDE":
      return { ...state, result: state.result / 3 };
    case "BY_INPUT":
      return { ...state, result: state.result + Number(state.name) };
    default:
      return { ...state };
  }
};

const MathCalc = (props) => {
  //   const [result, setResult] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState);
  console.log("state=>", state);
  return (
    <>
      <h2>Simple Calculatot</h2>
      <button onClick={() => dispatch({ type: "ADD" })}>Increment by 1</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "MULTIPLE" })}>
        Multiple by 2
      </button>
      <button onClick={() => dispatch({ type: "DIVIDE" })}>Divide by 3</button>
      <button onClick={() => dispatch({ type: "BY_INPUT" })}>Increment by input value</button>
      <input
        onChange={(e) =>
          dispatch({ type: "CHANGE_NAME", payload: e.target.value })
        }
      />
      <h4>
        Result: {state.result} {state.name}
      </h4>
    </>
  );
};
export default MathCalc;

/*
const initState = {
    result: 0,
    name:'John'
}

const reducer = (state, action) => {
    if(action.type === 'ADD_ONE) {
        ...
    }
    else if(action.type === 'MINUS_ONE'){
            ...
    }
    else{
            ...
    }

    switch(action.type){
        case 'ADD_ONE':
            return {...state, result: state.result + 1, name:'Marry'} // {resulr\t:1, name:'Marry'}
        case 'MINUS_ONE':
            return {...state,  name:'Dan'} // {result:1 , name: 'Dan'}
        default
            ...
    }
}

dispath():
action: dispatch({ type:'ADD_ONE' });
action: { type: 'MINUS_ONE' }

actions :
conse add = () => {
    return { type:'ADD_ONE', payload:value }
}

const [state,dispatch] = useReducer(reducer, initState)

const obj = {
    a: 3
}
// obj.a = 8

const obj1 = {...obj, a:3}

*/
