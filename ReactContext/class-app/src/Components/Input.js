import React from "react";
import styles from "./Input.module.css";
import { BookListContext } from "../Context/BookListContext";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: "",
      authorName: "",
    };
  }

  static contextType = BookListContext;

  inputChangeHandler = (e) => {
    if (e.target.id === "bookName" || e.target.id === "authorName") {
      this.setState({
        bookName: document.getElementById("bookName").value,
        authorName: document.getElementById("authorName").value,
      });
    }
  };

  submitHandler(e) {
    if (this.state.bookName !== "" && this.state.authorName !== "") {
      this.context.getInput({
        name: this.state.bookName,
        author: this.state.authorName,
        id: Math.random(),
      });
    } else {
      alert("Enter valid Details");
    }
    e.preventDefault();
    this.setState({ bookName: "" });
    this.setState({ authorName: "" });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.submitHandler.bind(this)}>
        <div>
          <label>Book's Name</label>
          <input
            id="bookName"
            type="text"
            placeholder="Enter the book's name"
            onChange={this.inputChangeHandler.bind(this)}
            value={this.state.bookName}
          />
        </div>
        <div>
          <label>Author's Name</label>
          <input
            id="authorName"
            type="text"
            placeholder="Enter the Author's name"
            onChange={this.inputChangeHandler.bind(this)}
            value={this.state.authorName}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

// const Input = (props) => {
//   const [bookName, setBookName] = useState("");
//   const [authorName, setAuthorName] = useState("");

//   const inputBookChangeHandler = (e) => {
//     setBookName(e.target.value);
//   };

//   const inputAuthorChangeHandler = (e) => {
//     setAuthorName(e.target.value);
//   };

//   const submitHandler = (e) => {
//     if (bookName !== "" && authorName !== "") {
//       props.getInput({ name: bookName, author: authorName, id: Math.random() });
//     } else {
//       alert("Enter valid Details");
//     }
//     e.preventDefault();
//     setBookName("");
//     setAuthorName("");
//   };

//   return (
//     <form className={styles.form} onSubmit={submitHandler}>
//       <div>
//         <label>Book's Name</label>
//         <input
//           type="text"
//           placeholder="Enter the book's name"
//           onChange={inputBookChangeHandler}
//           value={bookName}
//         />
//       </div>
//       <div>
//         <label>Author's Name</label>
//         <input
//           type="text"
//           placeholder="Enter the Author's name"
//           onChange={inputAuthorChangeHandler}
//           value={authorName}
//         />
//       </div>
//       <button>Submit</button>
//     </form>
//   );
// };

export default Input;
