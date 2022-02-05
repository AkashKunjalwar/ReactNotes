import { useReducer } from "react";
import BookListContext from "./BookListContext";
import BookListReducer, { defaultState } from "./BookListReducer";

const BookListContextProvider = (props) => {
  const [bookListState, dispatchBookList] = useReducer(
    BookListReducer,
    defaultState
  );

  const getInput = (input) => {
    dispatchBookList({
      type: "GET_INPUT",
      payload: input,
    });
  };

  const bookListCtx = {
    outputObj: bookListState.outputObj,
    length: bookListState.length,
    getInput: getInput,
  };

  return (
    <BookListContext.Provider value={bookListCtx}>
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContextProvider;
