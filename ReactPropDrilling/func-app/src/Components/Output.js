import React, { Fragment } from "react";
import styles from "./Output.module.css";

const Output = (props) => {
  return (
    <Fragment>
      {props.length !== 0 ? (
        <div className={styles.div}>
          <h4>Book List</h4>
          <ul>
            {props.output.map((book) => (
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
};

export default Output;
