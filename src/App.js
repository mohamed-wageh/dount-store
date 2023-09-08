import React from "react";
import {Routes, Route } from "react-router-dom";
import "./assets/styles/globalStyle.css"
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Menu from "./pages/Menu";
import './App.css'


const App = () => (
  <div className="App position-relative m-0 p-0 ">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/contact" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
