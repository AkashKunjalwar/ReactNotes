import React, { Fragment, useEffect, useState } from "react";

const useEffectDemo = () => {
  const [state, setState] = useState(false);

  const clickHandler = (e) => {
    setState(!state);
  };

  useEffect(() => {
    alert("Functional Component mounts or updated");

    return function unmount() {
      alert("Functional Component unmounts");
    };
  }, [state]);

  return (
    <div>
      <h1>Functional Component</h1>
      {state ? (
        <Fragment>
          <h1>Page is logged In</h1>
          <button onClick={clickHandler}>Log out</button>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Page is logged Out</h1>
          <button onClick={clickHandler}>Log In</button>
        </Fragment>
      )}
    </div>
  );
};

export default useEffectDemo;
