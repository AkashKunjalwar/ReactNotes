import "./App.css";
import UseEffectDemo from "./Components/UseEffectDemo";
import ComponentLifecycleDemo from "./Components/ComponentLifecycleDemo";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const toggleHandler = (e) => {
    setShow(!show);
  };

  return (
    <div className="App">
      {!show ? <ComponentLifecycleDemo /> : <UseEffectDemo />}
      <button onClick={toggleHandler}>Toggle</button>
    </div>
  );
}

export default App;
