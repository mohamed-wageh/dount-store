import React, { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Create a custom hook to access the context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // Function to add items to the cart
  const addToCart = (product, quantity) => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product is already in the cart, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Product is not in the cart, add it as a new item
      console.log("Adding to Cart:", product);
      setCart([...cart, { product, quantity }]);
      alert(`Added ${quantity} ${product.name} to the cart.`);
    }
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart([]);
  };
console.log(cart);
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
