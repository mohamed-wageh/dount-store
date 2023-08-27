import React from "react";

const Slider = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide container"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://i.pinimg.com/564x/6f/41/c2/6f41c2b21f1d937c85427b23c341dfc4.jpg"
            className="d-block w-100"
            alt="Slide 1"
            width={800}
            height={400}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/32/78/5f/32785fdf12780ffe9fdc599ddfa73c39.jpg"
            className="d-block w-100"
            alt="Slide 2"
            width={800}
            height={400}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/95/cb/12/95cb121aad2355a7e18c87a2e161c384.jpg"
            className="d-block w-100"
            alt="Slide 3"
            width={800}
            height={400}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;

