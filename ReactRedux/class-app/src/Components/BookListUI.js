import React, { Fragment } from "react";
import Input from "./Input";
import Output from "./Output";

class BookListUI extends React.Component {
  constructor() {
    super();
    this.state = {
      outputObj: [],
    };
  }

  getInput(input) {
    this.setState((prevState) => ({
      outputObj: [...prevState.outputObj, input],
    }));
  }

  render() {
    return (
      <Fragment>
        <Input getInput={this.getInput.bind(this)} />
        <Output
          output={this.state.outputObj}
          length={this.state.outputObj.length}
        />
      </Fragment>
    );
  }
}

// const BookListUI = () => {
//   let [outputObj, setOutputObject] = useState([]);
//   const [output, setOutput] = useState();

//   const getInput = (input) => {
//     setOutputObject((prevState) => (outputObj = [...prevState, input]));
//     setOutput(outputObj);
//   };

//   return (
//     <Fragment>
//       <Input getInput={getInput} />
//       <Output output={output} />
//     </Fragment>
//   );
// };

export default BookListUI;
