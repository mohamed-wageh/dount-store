import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer p-3 w-100 ">
      <div className=" row d-flex m-0 p-0 ">
        <div className=" col-lg-3 col-sm-5 d-flex flex-column gap-2 mb-2 ">
          <div className="mb-3 fw-bold">SHOP</div>
          <div className="pointer">ABOUT</div>
          <div className="pointer">FaQ</div>
          <div className="pointer">Store Policy</div>
          <div className="pointer">Contact Me</div>
        </div>
        <div className=" col-lg-3 col-sm-5 d-flex flex-column gap-2 mb-2 ">
          <div className="  mb-3 fw-bold">OPENING HOURS</div>
          <div >Mon-Fri 9:00 - 18:00</div>
          <div>Saturday 9:00 - 17:00</div>
          <div>Sunday 11:00 - 17:00</div>
        </div>
        <div className="col-lg-3 col-sm-5 d-flex flex-column gap-2 mb-2">
          <div className="mb-3 fw-bold ">ADDRESSES</div>
          <div>Maadii</div>
          <div>Giza</div>
         
        </div>
        <div className="col-lg-3 col-sm-5 d-flex flex-column gap-3 mt-4 ">
          <input className=" border-0 out rounded  pointer py-2 px-1 " type="text" placeholder="Email Address"/>
          <button className="  border-0 out rounded  btn-color py-2 pointer">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
