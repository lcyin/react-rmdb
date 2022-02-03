import React from "react";
// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import UserProvider from "./context";
// Styles
import { GlobalStyle } from "./GlobalStyle";

// functional rendering
// const start = () => React.createElement("div", null, "This is a little start");

const App = () => (
  // JSX
  // Wrap application
  <Router>
    <UserProvider>
      {/* Reuse component */}
      <Header />
      {/* Wrap route */}
      <Routes>
        {/* create route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* individual movie component, get by movie id */}
        <Route path="/:movieId" element={<Movie />} />
        {/* shoud not fount in any routes not exist */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);
export default App;
