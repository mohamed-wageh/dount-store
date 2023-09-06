import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { dount } = location.state || {};

  // State to track the quantity of products to add to the cart
  const [quantity, setQuantity] = useState(1);

  // Function to handle increasing the quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!dount) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={dount.img}
            alt={dount.name}
            className="img-fluid rounded-lg shadow"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4 text-primary">{dount.name}</h1>
          <p className="mb-4 lead">{dount.description}</p>
          <h2 className="text-danger">${dount.price.toFixed(2)}</h2>
          <div className="mb-4">
            <p>Quantity:</p>
            <div className="input-group">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                readOnly
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              onClick={() =>
                alert(`Added ${quantity} ${dount.name} to the cart.`)
              }
            >
              Add to Cart
            </button>
          </div>
            <button
              className="btn btn-success ms-2"
              onClick={() => alert(`Buy Now: ${quantity} ${dount.name}`)}
            >
              Buy Now
            </button>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Customer Reviews</h3>
          <ul className="list-unstyled">
            <li>
              <strong>5.0</strong> out of 5 stars
            </li>
            <li>Great product! Highly recommended.</li>
            <li>Fast shipping. Will buy again.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
