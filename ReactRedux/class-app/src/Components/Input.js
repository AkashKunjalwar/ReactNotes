import React from "react";
import { connect } from "react-redux";
import styles from "./Input.module.css";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: "",
      authorName: "",
    };
  }

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
      this.props.getInput({
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

const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (input) =>
      dispatch({
        type: "GET_INPUT",
        payload: input,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Input);
