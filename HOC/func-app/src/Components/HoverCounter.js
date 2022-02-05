import React from "react";
import withCount from "../HOC/withCountHOC";

const HoverCounter = (props) => {
  return (
    <div>
      <h1 onMouseOver={props.incrementHandler}>Hovered {props.count} times</h1>
    </div>
  );
};

export default withCount(HoverCounter);

// const HoverCounter = () => {
//   const [count, setCount] = useState(0);
//   const incrementHandler = (e) => {
//     setCount((prevState) => {
//       return prevState + 1;
//     });
//   };
//   return (
//     <div>
//       <h1 onMouseOver={incrementHandler}>Hovered {count} times</h1>
//     </div>
//   );
// };
