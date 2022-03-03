import React, { Component } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          return (
            <ThemeContext.Consumer>
              {(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth}>
                      {isAuthenticated
                        ? "Authenticated"
                        : "Unauthorized Access"}
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
