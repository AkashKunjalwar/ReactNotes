import React, { createContext } from "react";

const BookListContext = createContext();

class BookListContextProvider extends React.Component {
  state = {
    outputObj: [],
    length: undefined,
  };

  getInput = (input) => {
    const updatedOutputObj = [...this.state.outputObj, input];

    this.setState({
      outputObj: updatedOutputObj,
      length: updatedOutputObj.length,
    });
  };

  render() {
    return (
      <BookListContext.Provider
        value={{
          outputObj: this.state.outputObj,
          length: this.state.length,
          getInput: this.getInput,
        }}
      >
        {this.props.children}
      </BookListContext.Provider>
    );
  }
}

export { BookListContext };

export default BookListContextProvider;
