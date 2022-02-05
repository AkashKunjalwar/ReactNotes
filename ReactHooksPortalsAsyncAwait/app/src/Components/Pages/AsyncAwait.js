import React, { useState } from "react";
import codeImage from "../../Images/code.png";

const AsyncAwait = () => {
  const [showPara, setShowPara] = useState(false);
  const fetchFunc = async () => {
    console.log("Entered the fetchFunc");
    const response = await fetch("https://api.github.com/users");
    console.log("fetching is done");
    const users = await response.json();
    console.log("users resolved");
    return users;
  };

  const clickHandler = (e) => {
    setShowPara(!showPara);
    console.log("Entered the clickHandler function");
    console.log("going to enter fetch func after calling it");
    const fetchFuncOutput = fetchFunc();
    console.log(
      "returned after seeing the await to execute other lines of code"
    );
    console.log(
      "Again going inside of fetchFunc to check if response.json is resolved"
    );
    fetchFuncOutput.then((data) => console.log(data));
    console.log("returned after seeing the await is still not resolved");
    console.log(
      "as all the lines of code are executed, now it again goes to check if await is resolved"
    );
  };

  return (
    <div>
      <p>Demo for Async Await</p>
      <button onClick={clickHandler}>
        {!showPara ? "Click for Demo" : "Close the Demo"}
      </button>
      {showPara && (
        <div>
          <p>
            understand the functionality from the console log and parallely
            looking at the below code
          </p>
          <img src={codeImage} alt="codeImage" />
        </div>
      )}
    </div>
  );
};

export default AsyncAwait;
