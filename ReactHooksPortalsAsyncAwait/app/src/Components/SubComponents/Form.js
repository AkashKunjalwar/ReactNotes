import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import ReactDOM from "react-dom";

const Form = () => {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
  };

  const clickHandler = (e) => {
    setShowModal(true);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={input} />
        <button onClick={clickHandler}>Submit</button>
      </form>
      {showModal &&
        ReactDOM.createPortal(<Modal />, document.getElementById("overlay"))}
    </Fragment>
  );
};

export default Form;
