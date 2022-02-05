import { createStore } from "redux";

const defaultState = {
  outputObj: [],
  length: undefined,
};

const bookListReducer = (state = defaultState, action) => {
  if (action.type === "GET_INPUT") {
    state.outputObj = [...state.outputObj, action.payload];
    return {
      outputObj: state.outputObj,
      length: state.outputObj.length,
    };
  }
  return state;
};

const store = createStore(bookListReducer);

export default store;
