import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleFunction } = this.context;
    return <button onClick={toggleFunction}>Toggle Theme</button>;
  }
}
