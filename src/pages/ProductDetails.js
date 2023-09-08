import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../components/common/style.css'
const ProductDetails = () => {
  const location = useLocation();
  const { dount } = location.state || {};
  const navigate = useNavigate()

  // State to track the quantity of products to add to the cart
  const [quantity, setQuantity] = useState(1);

   const handleNavigate = () => {
    navigate('/checkout')
   }
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
    <div className=" container mt-5 ">
      <div className="row  m-0">
        <div className="col-lg-6">
          <img
            src={dount.img}
            alt={dount.name}
            className="img-fluid rounded-lg shadow"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-lg-6 ">
          <h1 className="mb-4 text-primary">{dount.name}</h1>
          <p className="mb-4 lead">{dount.description}</p>
          <h2 className="text-danger">${dount.price.toFixed(2)}</h2>
          <div className="mb-4 d-flex gap-4">
            <div >
            <p >Quantity:</p>
            </div>
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
                className=" text-center "
                value={quantity}
                readOnly
                style={{width:'50px'}}
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
          <div className="d-flex">
          <div>
            <button
              className="btn btn-light"
              style={{
                color: "#7c4859",
                border:"1px solid #7c4859"
              }}
              onClick={() =>
                alert(`Added ${quantity} ${dount.name} to the cart.`)
              }
            >
              Add to Cart
            </button>
          </div>
            <button
              className=" ms-2 border-0 out rounded pointer btn-color px-3 "
            onClick={() =>/* alert(`Buy Now: ${quantity} ${dount.name}`)*/ handleNavigate()}
            >
              Buy Now
            </button>
        </div>
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
