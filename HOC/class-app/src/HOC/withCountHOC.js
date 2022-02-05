import React from "react";

function withCount(Component) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }

    incrementHandler = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <Component
          count={this.state.count}
          incrementHandler={this.incrementHandler.bind(this)}
        />
      );
    }
  };
}

export default withCount;
