import React from "react";
import Quiz from "./Quiz";
import Intro from "./Intro";
import Exit from "./Exit";
import Result from "./Result"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
