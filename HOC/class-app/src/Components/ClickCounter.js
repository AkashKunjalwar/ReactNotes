import React from "react";
import withCount from "../HOC/withCountHOC";

class ClickCounter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementHandler}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}
export default withCount(ClickCounter);
