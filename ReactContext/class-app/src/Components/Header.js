import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>MyBookList</h1>
      </div>
    );
  }
}

// const Header = () => {
//   return (
//     <div className={styles.header}>
//       <h1>MyBookList</h1>
//     </div>
//   );
// };

// export default Header;

export default Header;
