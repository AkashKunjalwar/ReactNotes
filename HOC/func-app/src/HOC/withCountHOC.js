import React, { useState } from "react";

const withCount = (Component) => {
  return () => {
    const [count, setCount] = useState(0);
    const incrementHandler = (e) => {
      setCount((prevState) => {
        return prevState + 1;
      });
    };
    return <Component count={count} incrementHandler={incrementHandler} />;
  };
};

export default withCount;
