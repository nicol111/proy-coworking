import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Importa el Navbar
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Reserva from "./pages/Reserva";
import Profile from "./pages/Profile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        {!isAuthenticated && <Route path="/login" element={<Login onLogin={handleLogin} />} />}
        {!isAuthenticated && <Route path="/register" element={<Register onRegister={handleLogin} />} />}
        {isAuthenticated && <Route path="/about" element={<AboutUs />} />}
        {isAuthenticated && <Route path="/reserva" element={<Reserva />} />}
        {isAuthenticated && <Route path="/profile" element={<Profile onLogout={handleLogout} />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
