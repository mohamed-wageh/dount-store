import React from 'react'
import "../components/common/style.css"

const Checkout = () => {
  return (
    <div className='p-3 bg-light'>
    <div className='container rounded bg-white mx-auto my-4 p-3'>
        <h2 className='text-center mb-4 mt-2'>Personal Information</h2>
    <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
    <div className="input-group has-validation">
      <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a email.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">Street</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">City</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid City.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Counrty</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>    <div className="invalid-feedback">
      Please provide a valid Counrty.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="border-0 out rounded pointer btn-color py-2 px-3" type="submit">Submit form</button>
  </div>
</form>
    </div>
    <div className='container d-flex justify-content-around mb-5 bg-white p-3 mt-2'>
      <button type="button" className="btn bg-white "
      style={{
        color: "#7c4859",
        border:"1px solid #7c4859",

      }}>Back</button>
      <button type="button" className=" border-0 out rounded pointer btn-color px-3">Save & continue</button>

    </div>
      </div>
  )
}

export default Checkout