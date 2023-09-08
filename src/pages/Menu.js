import React, { useState } from "react";
import DonutCard from "./DonutCard";
import arr from "../data/dummy-data.json";
import "../components/common/style.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    const [input , setInput] = useState('')
    const [data, setData] = useState(arr);
   
  
   const  onSubmit = (e) => {
      e.preventDefault();
      console.log(input);
      const searchTerm = input.toLowerCase();
      const filteredItems = arr.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setData(filteredItems)
      console.log(filteredItems);
  }
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  
 


  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a
            className="navbar-brand  fs-4 py-1 px-3 mb-2"
            style={{ fontFamily: "Satisfy, sans-serif" , color:'#7c4859' , border:'1px solid #7c4859'}}
            href="/"
          >
            Menu
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
            <button className="btn btn-outline-dark" type="submit" onClick={onSubmit
            
            }>
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container m-2 mb-4 m-auto">
        <div className="row m-0 p-3 d-flex gap-4 justify-content-center ">
          {data &&
            data.map((dount) => {
              return (
                <div className="card col-lg-3 col-md-4 col-sm-10 " key={dount.id}>
                  <DonutCard dount={dount}  navigate={navigate} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Menu;
