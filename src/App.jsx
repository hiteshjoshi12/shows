// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shows from "./component/Shows";
import ShowDetails from "./component/ShowDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shows />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
