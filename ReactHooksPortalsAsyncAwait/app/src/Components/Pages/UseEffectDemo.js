import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(`${state} useEffect is called`);
  }, [state]);

  const clickHandler = (e) => {
    setState(!state);
  };

  return (
    <div>
      <p>Click the toggle button for useEffect() demo</p>
      {state ? <p>State is true</p> : <p>State is false</p>}
      <button onClick={clickHandler}>Toggle</button>
    </div>
  );
};

export default UseEffectDemo;
