import React from "react";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    // throw new Error("I crashed!");
  };

  componentDidUpdate() {
    if (this.state.counter > 5) {
      throw new Error("I crashed!");
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Click</button>
        {this.state.counter}
      </>
    );
  }
}

export default BuggyCounter;
