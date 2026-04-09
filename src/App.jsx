import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Checkout from "./Pages/Checkout";
import Navbar from "./Components/Navbar";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./Pages/ProductDetails";
import "./App.css";
import CartProvider from "./context/CartContext";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  {" "}
                  <Checkout />{" "}
                </ProtectedRoute>
              }
            />

            <Route
              path="/products/:id"
              element={
                <ProtectedRoute>
                  {" "}
                  <ProductDetails />{" "}
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
