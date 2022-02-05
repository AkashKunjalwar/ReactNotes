import React from "react";

const Button = (props) => {
  console.log("Button Running");
  return <button onClick={props.onClick}>Toggle Paragraph</button>;
};

// export default React.memo(Button);

export default Button;
