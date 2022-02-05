import React, { Fragment } from "react";
import { BookListContext } from "../Context/BookListContext";
import styles from "./Output.module.css";

class Output extends React.Component {
  static contextType = BookListContext;
  render() {
    return (
      <Fragment>
        {this.context.length !== undefined ? (
          <div className={styles.div}>
            <h4>Book List</h4>
            <ul>
              {this.context.outputObj.map((book) => (
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

// const Output = (props) => {
//   return (
//     <Fragment>
//       {props.output !== undefined ? (
//         <div className={styles.div}>
//           <h4>Book List</h4>
//           <ul>
//             {props.output.map((book) => (
//               <li key={book.id}>
//                 {book.name}, written by {book.author}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <h4>The Book List is empty</h4>
//       )}
//     </Fragment>
//   );
// };

export default Output;
