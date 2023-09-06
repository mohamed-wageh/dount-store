import React from "react";
import Slider from "../components/common/Slider";
import { useNavigate } from "react-router-dom";
import arr from "../data/dummy-data.json";
import DonutCard from "./DonutCard";

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/menu");
  }

  return (
    <div className=" position-relative ">
      <Slider />
      <div className="menuBar border-top border-dark  position-relative container m-auto mt-5 mb-5">
        <button
          onClick={handleClick}
          className="btn rounded-1 position-absolute top-0 start-50 translate-middle bg-white fs-4 border-dark rounded-1"
          style={{
            fontFamily: "Satisfy, sans-serif",
            color:'#7c4859'
          }}
        >
          All menu
        </button>
        <div className="row m-0 p-3 d-flex gap-4 justify-content-center mt-3 p-4">
        {arr.slice(0, 3).map((dount) => {
          return (
            <div className="card col-lg-3 col-md-4 col-sm-10 " key={dount.id}>
              <DonutCard dount={dount} navigate={navigate} />
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Home;
