import React from "react";


const Slider = () => {
  return (
 
      <div className="row d-flex justify-content-center mt-3">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner col">
            <div class="carousel-item active">
              <img
                src="https://i.pinimg.com/564x/6f/41/c2/6f41c2b21f1d937c85427b23c341dfc4.jpg"
                class="d-block "
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src="https://i.pinimg.com/564x/32/78/5f/32785fdf12780ffe9fdc599ddfa73c39.jpg"
                class="d-block"
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src="https://i.pinimg.com/564x/95/cb/12/95cb121aad2355a7e18c87a2e161c384.jpg"
                class="d-block "
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Slider;
