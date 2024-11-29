import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/assets/pages/Login/login.jsx";
import Register from "../src/assets/pages/Register/Register.jsx";
import Recover from "../src/assets/pages/recover/recover.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
    </Router>
  );
};

export default App;

