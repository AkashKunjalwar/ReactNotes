import React, { useState } from "react";
import Button from "../SubComponents/Button";
import Paragraph from "../SubComponents/Paragraph";

const UseMemoCallbackDemo = () => {
  const [showPara, setShowPara] = useState(false);

  console.log("UseMemo running");

  // const toggleHandler = useCallback((e) => {
  //   setShowPara(!showPara);
  // }, []);

  const toggleHandler = (e) => {
    setShowPara(!showPara);
  };

  return (
    <div>
      <Paragraph show={false} />
      <Button onClick={toggleHandler} />
      <div>
        <ul style={{ textAlign: "left" }}>
          <li>
            whenever the toggle button is clicked, we get 3 console logs because
            eventhough the state change is done in this component, the affect is
            there on the child components as well, thus the console log messages
            for the child components are also logged
          </li>
          <li>
            if the state is set to false, even though the prop value do not
            change and is constant, still the console log messages are seen,
            however, the flashing of the component in the element section do not
            happen as no dom change is there. The reason is that even though the
            prop do not change, but the state is changed for every button click
            and this calls the App function again which inturn calls the child
            components which are also functions and those get executed for every
            call.
          </li>
          <li>
            if there is no prop change and even then the child and grandchildren
            components are also executed, it causes some performance issues.
          </li>
          <li>
            we need to react.memo(child component), it checks if the value of
            props are changed before and after the execution of parent
            component, and if there is any change, then the child component is
            executed other wise skipped. However, it also comes with its
            performance issue as the react has to store the value first and then
            compare them. When useMemo is used for one of the child component in
            the above example, we can see console log messages for the
            components that are not wrapped in memo
          </li>
          <li>
            if we wrap the button with react.memo as well, we could see that
            console message is again seen, this is because the component is
            re-evaluating and the reason is that the prop value is indeed
            changing. The function is re created for every execution, thus it is
            a new function doing the same thing. Although in case of paragraph
            component, the function re-executes and it has a new value of prop,
            however, upon comparing the boolean value which is a primitive
            datatype, the previous prop and present prop value is same and thus
            no re evaluation. Functions and objects in javascript are reference
            datatypes and thus even though both return same thing, they are
            always distinct. If we compare [1,2,3] and [1,2,3], we get false
            because of reference datatype.
          </li>
          <li>
            useCallback() hook allows to store a function across component
            executions, it says to react that we want it to save the function
            and that it shouldn't be created again for every execution. It too
            needs a dependency array.
          </li>
          <li>
            the reason for the dependencies adding is that the functions in
            javascript are closures which means that they close over the values
            that are available in their environment. Whenever a function is
            defined, javascript basically locks in all the variables that were
            using in there, thus when a dependency is added and it changes, then
            a new function is to be recreated and that variable value should be
            stored.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseMemoCallbackDemo;

//whenever the toggle button is clicked, we get 3 console logs because  eventhough the state change is done in this component, the affect is there on the child components as well, thus the console log messages for the child components are also logged

// if the state is set to false, even though the prop value do not change and is constant, still the console log messages are seen, however, the flashing of the component in the element section do not happen as no dom change is there. The reason is that even though the prop do not change, but the state is changed for every button click and this calls the App function again which inturn calls the child components which are also functions and those get executed for every call.

// if there is no prop change and even then the child and grandchildren components are also executed, it causes some performance issues.

// we need to react.memo(child component), it checks if the value of props are changed before and after the execution of parent component, and if there is any change, then the child component is executed other wise skipped. However, it also comes with its performance issue as the react has to store the value first and then compare them. When useMemo is used for one of the child component in the above example, we can see console log messages for the components that are not wrapped in memo

// if we wrap the button with react.memo as well, we could see that console message is again seen, this is because the component is re-evaluating and the reason is that the prop value is indeed changing. The function is re created for every execution, thus it is a new function doing the same thing. Although in case of paragraph component, the function re-executes and it has a new value of prop, however, upon comparing the boolean value which is a primitive datatype, the previous prop and present prop value is same and thus no re evaluation. Functions and objects in javascript are reference datatypes and thus even though both return same thing, they are always distinct. If we compare [1,2,3] and [1,2,3], we get false because of reference datatype.

// useCallback() hook allows to store a function across component executions, it says to react that we want it to save the function and that it shouldn't be created again for every execution. It too needs a dependency array.

// the reason for the dependencies adding is that the functions in javascript are closures which means that they close over the values that are available in their environment. Whenever a function is defined, javascript basically locks in all the variables that were using in there, thus when a dependency is added and it changes, then a new function is to be recreated and that variable value should be stored.
