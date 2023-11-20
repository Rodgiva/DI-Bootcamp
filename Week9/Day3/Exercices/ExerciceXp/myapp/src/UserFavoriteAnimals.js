import React, { Component } from "react";

class UserFavoriteAnimals extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.favAnimal}</li>
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
