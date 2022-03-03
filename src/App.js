import React from "react";
import BookList from "./components/BookList.jsx";
import Navbar from "./components/Navbar.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
