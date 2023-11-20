import React from "react";

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    if (this.state.counter > 5) {
      throw "I crashed!";
    }

    return (
      <>
        <button onClick={this.handleClick}>Click</button>
        {this.state.counter}
      </>
    );
  }
}

export default BuggyCounter;
