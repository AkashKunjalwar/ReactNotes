import React, { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {
  const input = useRef("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    console.log(
      "UseEffect is called as state changed because Component re-renders"
    );
  }, [userInput]);

  useEffect(() => {
    console.log(input.current.value);
  }, [input]);

  const clickHandler = (e) => {
    if (e.target.id === "UC") {
      input.current.value = userInput + "added";
    } else if (e.target.id === "C") {
      setUserInput(document.getElementById("userInput").value);
    }
    e.preventDefault();
  };

  return (
    <div>
      <p>
        This is the demo for useRef() hook and difference between controlled and
        controlled components
      </p>
      <input id="userInput" type="text" defaultValue={userInput} />
      <button id="C" onClick={clickHandler}>
        Controlled Component
      </button>
      <input type="text" ref={input} />
      <button id="UC" onClick={clickHandler}>
        UnControlled Component
      </button>
      <textarea
        style={{ width: "90%", height: "100px", marginTop: "10px" }}
        defaultValue=" When controlled component button is clicked, the useEffect is called as
        the component re-renders due to state change of a controlled component
        and thus the console log shows the message"
      />
      ) :
      <textarea
        style={{ width: "90%", height: "100px", marginTop: "10px" }}
        defaultValue=" When uncontrolled component button is clicked, the useEffect is not called as
        the component do not re-renders due to input value change or reference value change of a uncontrolled component
        and thus no message in console log that was mentioned for input value change in another useEffect() hook. This useEffect is called only once when the component is mounted for the first time"
      />
    </div>
  );
};

export default UseRefDemo;
