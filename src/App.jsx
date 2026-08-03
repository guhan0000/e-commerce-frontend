
import { useState } from 'react'
import Home from './pages/Home'
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
   


      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="product/:id" element={<ProductDetails/>} />
      </Routes>
    </>
  );
}

export default App;
