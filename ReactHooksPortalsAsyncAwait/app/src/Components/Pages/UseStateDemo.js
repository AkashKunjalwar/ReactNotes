import React, { useState } from "react";

const UseStateDemo = () => {
  const [state, setState] = useState(false);

  const clickHandler = (e) => {
    setState(!state);
  };

  return (
    <div>
      {state ? (
        <p>This is useState() hook method</p>
      ) : (
        <p>Click the toggle button for useState() demo</p>
      )}
      <button onClick={clickHandler}>Toggle</button>
    </div>
  );
};

export default UseStateDemo;
