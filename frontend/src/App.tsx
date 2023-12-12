import React from 'react';
import Login from './components/login/login';
import Homepage from "./components/homepage/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
