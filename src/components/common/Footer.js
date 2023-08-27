import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer p-2 w-100 position-absolute top-100 start-50 translate-middle">
      <div className=" d-flex  justify-content-around">
        <div className=" d-flex flex-column gap-2">
          <div className="mb-3 fw-bold">SHOP</div>
          <div className="pointer">ABOUT</div>
          <div className="pointer">FaQ</div>
          <div className="pointer">Store Policy</div>
          <div className="pointer">Contact Me</div>
        </div>
        <div className=" d-flex flex-column gap-2 ">
          <div className="mb-3 fw-bold">OPENING HOURS</div>
          <div >Mon-Fri 9:00 - 18:00</div>
          <div>Saturday 9:00 - 17:00</div>
          <div>Sunday 11:00 - 17:00</div>
        </div>
        <div className=" d-flex flex-column gap-2">
          <div className="mb-3 fw-bold ">ADDRESSES</div>
          <div>Maadii</div>
          <div>Giza</div>
         
        </div>
        <div className="  d-flex flex-column gap-3 mt-4 p-0">
          <button className=" border-0 out rounded py-2 px-1 pointer">  Email Address  </button>
          <button className="  border-0 out rounded py-2 px-1 btn-color pointer">  Subscribe Now  </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
