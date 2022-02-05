import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ listStyle: "none", display: "inline-flex" }}>
      <li style={{ margin: "10px" }}>
        <Link to="/">Home</Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/useState">useState</Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/useReducer">useReducer</Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/useEffect">useEffect</Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/useRef">useRef</Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/useMemoCallback">useMemoCallback</Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/portals">Portals</Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/AsyncAwait">AsyncAwait</Link>
      </li>
    </nav>
  );
};

export default Header;
