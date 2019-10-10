import React, { Component } from "react";
import "./Die.css";
const diceNum = ["one", "two", "three", "four", "five", "six"];
class Die extends Component {
  static defaultProps = {
    val: 3
  };
  handleClick = () => this.props.handleClick(this.props.idx);

  render() {
    //style objects

    const { val, locked, allowed, rolling } = this.props;
    let classes = ` Die fas fa-5x fa-dice-${diceNum[val - 1]} `;
    if (locked) classes += "Die-locked";
    if (rolling && !locked) classes += "Die-rolling";
    return (
      <i onClick={this.handleClick} className={classes} disabled={!allowed}></i>
    );
  }
}

export default Die;
