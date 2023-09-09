import React from "react";
import { useCart } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  // Access the cart data using the useCart hook
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/checkout");
  };
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Shopping Cart</h1>
      {cart && cart.length > 0 && (
        <>
          <ul className="list-group">
            {cart.map((cartItem) => (
              <li
                key={cartItem.product.id}
                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center cart-item"
              >
                <div className="d-flex align-items-center mb-2 mb-md-0">
                  <img
                    src={cartItem.product.img}
                    alt={cartItem.product.name}
                    className="cart-item-image img-fluid"
                  />
                  <div>
                    <h3 className="cart-item-title">{cartItem.product.name}</h3>
                    <p className="cart-item-description">
                      {cartItem.product.description}
                    </p>
                  </div>
                </div>
                <div className="cart-item-details">
                  <p className="cart-item-quantity">
                    Quantity: {cartItem.quantity}
                  </p>
                  <p className="cart-item-price">
                    Price: ${cartItem.product.price.toFixed(2)}
                  </p>
                  <p className="cart-item-total">
                    Total: $
                    {(cartItem.product.price * cartItem.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="cart-item-remove">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(cartItem.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary mt-4"
            onClick={() => handleNavigate()}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
