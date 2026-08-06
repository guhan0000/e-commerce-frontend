import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import  CartProvider  from "./context/CartContext"

function App() {
  return (
    <>
      <CartProvider>

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
            <Route
              path="/product/:id"
              element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
            />
          </Routes>
        </AuthProvider>
      </CartProvider>
    </>
  );
}
export default App;
