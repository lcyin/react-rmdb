import React from "react";
// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
// Styles
import { GlobalStyle } from "./GlobalStyle";

// functional rendering
// const start = () => React.createElement("div", null, "This is a little start");

const App = () => (
  // JSX
  // Wrap application
  <Router>
    {/* Reuse component */}
    <Header />
    {/* Wrap route */}
    <Routes>
      {/* create route */}
      <Route path="/" element={<Home />} />
      {/* individual movie component, get by movie id */}
      <Route path="/:movieId" element={<Movie />} />
      {/* shoud not fount in any routes not exist */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);
export default App;