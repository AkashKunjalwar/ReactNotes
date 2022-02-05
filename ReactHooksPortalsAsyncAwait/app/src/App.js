import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UseStateDemo from "./Components/Pages/UseStateDemo";
import UseReducerDemo from "./Components/Pages/UseReducerDemo";
import UseEffectDemo from "./Components/Pages/UseEffectDemo";
import UseRefDemo from "./Components/Pages/UseRefDemo";
import UseMemoCallbackDemo from "./Components/Pages/UseMemoCallbackDemo";
import Header from "./Components/Header";
import Portals from "./Components/Pages/Portals";
import AsyncAwait from "./Components/Pages/AsyncAwait";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/useState" element={<UseStateDemo />} />
          <Route path="/useReducer" element={<UseReducerDemo />} />
          <Route path="/useEffect" element={<UseEffectDemo />} />
          <Route path="/useRef" element={<UseRefDemo />} />
          <Route path="/useMemoCallback" element={<UseMemoCallbackDemo />} />
          <Route path="/portals" element={<Portals />} />
          <Route path="/AsyncAwait" element={<AsyncAwait />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
