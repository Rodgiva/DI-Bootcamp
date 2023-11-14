import React, { Component } from "react";
import "./exercice3.css"

class Exercice extends Component {
  render() {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
      <>
        {/* <h1 style={{ backgroundColor: "lightblue" }}>H1 tag</h1> */}
        <h1 style={style_header}>H1 tag</h1>
        <p className="para">Paragraph</p>
        <a href="">Link</a>
        <form action="">Form</form>
        <img src="https://i.pinimg.com/736x/d3/69/0f/d3690f12473ec7e3103ec8e7ea5c70d5.jpg" />
      </>
    );
  }
}

export default Exercice;
