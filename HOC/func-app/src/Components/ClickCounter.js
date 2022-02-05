import React from "react";
import withCount from "../HOC/withCountHOC";

const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.incrementHandler}>
        Clicked {props.count} times
      </button>
    </div>
  );
};

export default withCount(ClickCounter);

// const ClickCounter = () => {
//   const [count, setCount] = useState(0);
//   const incrementHandler = (e) => {
//     setCount((prevState) => {
//       return prevState + 1;
//     });
//   };

//   return (
//     <div>
//       <button onClick={incrementHandler}>Clicked {count} times</button>
//     </div>
//   );
// };
