
import { useState } from 'react'
import Home from './pages/Home'
import { Route } from 'react-router-dom';



import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>



      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
