// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'; // Import your Home component
import Profile from './pages/Profile/Profile'; // Import your Profile component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} /> {/* Default route */}
      <Route path="/profile" element={<Profile />} /> {/* Profile route */}
    </Routes>
  );
};

export default AppRoutes;