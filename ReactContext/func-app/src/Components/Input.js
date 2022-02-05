import React, { useContext, useState } from "react";
import styles from "./Input.module.css";
import BookListContext from "../Context/BookListContext";

const Input = () => {
  const bookListCtx = useContext(BookListContext);

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
      bookListCtx.getInput({
        name: bookObject.bookName,
        author: bookObject.authorName,
        id: Math.random(),
      });
      setBookObject({ bookName: "", authorName: "" });
    } else {
      alert("Enter valid Details");
    }
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
