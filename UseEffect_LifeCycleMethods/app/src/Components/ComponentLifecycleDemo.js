import React, { Fragment } from "react";

class ComponentLifecycleDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      state: false,
    };
  }

  clickHandler = (e) => {
    this.setState({ state: !this.state.state });
  };

  componentDidMount = () => {
    alert("Class Component mounted");
  };

  componentDidUpdate = () => {
    alert("Class Component updated");
  };

  componentWillUnmount = () => {
    alert("Class Component will umount");
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        {this.state.state ? (
          <Fragment>
            <h2>Page is logged In</h2>
            <button onClick={this.clickHandler.bind(this)}>Log out</button>
          </Fragment>
        ) : (
          <Fragment>
            <h2>Page is logged Out</h2>
            <button onClick={this.clickHandler.bind(this)}>Log In</button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default ComponentLifecycleDemo;
