import React, { Fragment } from "react";
import styles from "./Output.module.css";
import { useSelector } from "react-redux";

const Output = () => {
  const outputObj = useSelector((state) => state.outputObj);
  const length = useSelector((state) => state.length);

  return (
    <Fragment>
      {length !== undefined ? (
        <div className={styles.div}>
          <h4>Book List</h4>
          <ul>
            {outputObj.map((book) => (
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
