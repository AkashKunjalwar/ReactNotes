const defaultState = {
  outputObj: [],
  length: undefined,
};

const BookListReducer = (state, action) => {
  if (action.type === "GET_INPUT") {
    const updatedOutputObj = [...state.outputObj, action.payload];
    return {
      outputObj: updatedOutputObj,
      length: updatedOutputObj.length,
    };
  }
  return defaultState;
};

export { defaultState };

export default BookListReducer;
