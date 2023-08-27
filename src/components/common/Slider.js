import React from "react";


const Slider = () => {
  return (
 
      <div className="container-fluid d-flex justify-content-center">
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
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                src="https://img.freepik.com/free-photo/donuts-with-white-chocolate-cream-sprinkles-sugar_74190-7218.jpg?size=626&ext=jpg&uid=R114292659&ga=GA1.2.1638503974.1693153564&semt=ais"
                class="d-block  "
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src="https://img.freepik.com/free-photo/colorful-sweeties-donuts-pattern-composition_171337-20060.jpg?size=626&ext=jpg&uid=R114292659&ga=GA1.2.1638503974.1693153564&semt=ais"
                class="d-block "
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src="https://img.freepik.com/free-photo/glazed-donuts-plain-background_23-2148332834.jpg?size=626&ext=jpg&uid=R114292659&ga=GA1.2.1638503974.1693153564&semt=ais"
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
