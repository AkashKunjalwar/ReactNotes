import React from "react";
import withCount from "../HOC/withCountHOC";

class HoverCounter extends React.Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementHandler}>
          Hovered {this.props.count} times
        </h1>
      </div>
    );
  }
}

export default withCount(HoverCounter);
