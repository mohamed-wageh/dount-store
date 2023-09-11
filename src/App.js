import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/globalStyle.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Menu from "./pages/Menu";
import "./App.css";
import ContactUs from "./pages/ContactUs";

const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <div className=" flex-grow-1 m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;
