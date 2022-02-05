import React, { Fragment } from "react";
import { connect } from "react-redux";
import styles from "./Output.module.css";

class Output extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.length !== undefined ? (
          <div className={styles.div}>
            <h4>Book List</h4>
            <ul>
              {this.props.outputObj.map((book) => (
                <li key={book.id}>
                  {book.name}, written by {book.author}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <h4>The Book List is empty</h4>
        )}
      </Fragment>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    outputObj: state.outputObj,
    length: state.length,
  };
};

export default connect(mapPropsToState)(Output);
