import React, { Fragment, useState } from "react";
import Input from "./Input";
import Output from "./Output";

const BookListUI = () => {
  const [outputObj, setOutputObject] = useState([]);

  const getInput = (input) => {
    setOutputObject([...outputObj, input]);
  };

  return (
    <Fragment>
      <Input getInput={getInput} />
      <Output output={outputObj} length={outputObj.length} />
    </Fragment>
  );
};

export default BookListUI;
