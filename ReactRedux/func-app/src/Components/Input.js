import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Input.module.css";

const Input = () => {
  const dispatch = useDispatch();

  const [bookObject, setBookObject] = useState({
    bookName: "",
    authorName: "",
  });

  const inputChangeHandler = (e) => {
    if (e.target.id === "bookName" || e.target.id === "authorName") {
      setBookObject({
        bookName: document.getElementById("bookName").value,
        authorName: document.getElementById("authorName").value,
      });
    }
  };

  const submitHandler = (e) => {
    if (bookObject.bookName !== "" && bookObject.authorName !== "") {
      dispatch({
        type: "GET_INPUT",
        payload: {
          name: bookObject.bookName,
          author: bookObject.authorName,
          id: Math.random(),
        },
      });
    } else {
      alert("Enter valid Details");
    }
    setBookObject({ bookName: "", authorName: "" });
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label>Book's Name</label>
        <input
          id="bookName"
          type="text"
          placeholder="Enter the book's name"
          onChange={inputChangeHandler}
          value={bookObject.bookName}
        />
      </div>
      <div>
        <label>Author's Name</label>
        <input
          id="authorName"
          type="text"
          placeholder="Enter the Author's name"
          onChange={inputChangeHandler}
          value={bookObject.authorName}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Input;
