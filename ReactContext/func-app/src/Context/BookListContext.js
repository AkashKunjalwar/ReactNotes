import { createContext } from "react";

const BookListContext = createContext({
  outputObj: [],
  getInput: (input) => {},
});

export default BookListContext;
