<<<<<<< HEAD
import Home from "./pages/Home";
=======

import { useState } from 'react'
import Home from './pages/Home'
>>>>>>> feature/home
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";


=======
import ProductDetails from './pages/ProductDetails';
>>>>>>> feature/home

function App() {
  return (
    <>
<<<<<<< HEAD
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/favourites"
            element={
              <ProtectedRoute>
                <Favourites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
=======
   


      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="product/:id" element={<ProductDetails/>} />
      </Routes>
>>>>>>> feature/home
    </>
  );
}

export default App;