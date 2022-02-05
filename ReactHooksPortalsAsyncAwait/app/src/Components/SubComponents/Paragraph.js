import React from "react";

const Paragraph = (props) => {
  console.log("Paragraph running");
  return <div>{props.show ? <p>Paragraph can be shown</p> : ""}</div>;
};

// export default React.memo(Paragraph);

export default Paragraph;
