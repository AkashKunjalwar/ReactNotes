import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");

  const inputBookChangeHandler = (e) => {
    setBookName(e.target.value);
  };

  const inputAuthorChangeHandler = (e) => {
    setAuthorName(e.target.value);
  };

  const submitHandler = (e) => {
    if (bookName !== "" && authorName !== "") {
      props.getInput({ name: bookName, author: authorName, id: Math.random() });
    } else {
      alert("Enter valid Details");
    }
    e.preventDefault();
    setBookName("");
    setAuthorName("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label>Book's Name</label>
        <input
          type="text"
          placeholder="Enter the book's name"
          onChange={inputBookChangeHandler}
          value={bookName}
        />
      </div>
      <div>
        <label>Author's Name</label>
        <input
          type="text"
          placeholder="Enter the Author's name"
          onChange={inputAuthorChangeHandler}
          value={authorName}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Input;
