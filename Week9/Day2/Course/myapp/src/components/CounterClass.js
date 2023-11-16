import React from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("contructor");
  }

  addOne = (val) => {
    this.setState({ count: this.state.count + val });
  };

  render() {
    return (
      <>
        <h1>Counter</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.addOne(2)}>Add</button>
        <div>
          <input type="text" />
          <h4></h4>
        </div>
      </>
    );
  }
}

export default CounterClass;
