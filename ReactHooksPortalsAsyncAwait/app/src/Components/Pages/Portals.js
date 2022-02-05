import React, { Fragment } from "react";
import Form from "../SubComponents/Form";

const Portals = () => {
  return (
    <Fragment>
      <Form />
      <div>
        <ul style={{ textAlign: "left" }}>
          <li>
            Consider we have a modal which is an overlay to indicate the user
            that something is wrong with the form that was submitted. The
            indication in general is like a message appearing in front of the
            user , blocking or reducing the opacity of the form in a way of
            warning the user.
          </li>
          <li>
            In general, sementically, it is expected that a modal is a sibling
            of the app component as it should be above the app component that
            has a form component where the mistake was made and this mistake is
            to be known by the user.
          </li>
          <li>
            In such case, we use portals so that the dom in the browser shows
            that the modal and app are siblings
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Portals;

// Consider we have a modal which is an overlay to indicate the user that something is wrong with the form that was submitted. The indication in general is like a message appearing in front of the user , blocking or reducing the opacity of the form in a way of warning the user.

// In general, sementically, it is expected that a modal is a sibling of the app component as it should be above the app component that has a form component where the mistake was made and this mistake is to be known by the user.

// In such case, we use portals so that the dom in the browser shows that the modal and app are siblings
