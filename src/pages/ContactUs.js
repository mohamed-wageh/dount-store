import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faShop } from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div className="container my-3 p-3">
      <div className="row m-0 p-0 gap-3">
        <div className="col-lg-6 col-md-6">
          <h1>Contact Us</h1>
          <p className="text-secondary">
            feel free to contact us any time . we will get back to you as soon
            as we can!
          </p>
          <div className="container w-75 mx-0 my-2 p-0">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button
              type="button"
              className=" border-0 out rounded pointer btn-color py-1 w-25"
            >
              Send
            </button>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 btn-color rounded-1 position-relative ">
          <div className="container p-4">
            <h3 className="mb-2">Info</h3>
            <div className=" d-flex gap-4 mb-2 p-1">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
              <p>info@getintouch.we</p>
            </div>
            <div className=" d-flex gap-4 mb-2 p-1">
              <FontAwesomeIcon icon={faPhone} className="mt-1" />
              <p>01100297301</p>
            </div>
            <div className=" d-flex gap-4 p-1">
              <FontAwesomeIcon icon={faShop} className="mt-1" />
              <p>Maadii , Giza </p>
            </div>
          </div>
          <div
            className=" footer position-absolute top-0 start-0 translate-middle "
            style={{ width: "25px", height: "25px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
