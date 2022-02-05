import React, { useReducer } from "react";

const initialState = {
  isState: false,
};

const reducer = (state, action) => {
  if (action.type === "TOGGLE") {
    const newState = !action.payload;
    return {
      isState: newState,
    };
  }
  return state;
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (e) => {
    dispatch({
      type: "TOGGLE",
      payload: state.isState,
    });
    e.preventDefault();
  };

  return (
    <div>
      {state.isState ? (
        <p>This is useReducer() hook method</p>
      ) : (
        <p>Click the toggle button for useReducer() demo</p>
      )}
      <button onClick={clickHandler}>Toggle</button>
    </div>
  );
};

export default UseReducerDemo;
