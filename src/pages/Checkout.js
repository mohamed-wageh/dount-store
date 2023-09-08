import React from 'react'
import "../components/common/style.css"

const Checkout = () => {
  return (
    <div className='p-3 bg-light'>
    <div className='container rounded bg-white mx-auto my-4 p-3'>
        <h2 className='text-center mb-4 mt-2'>Personal Information</h2>
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
    <div class="input-group has-validation">
      <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a email.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Street</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">City</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid City.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Counrty</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>    <div class="invalid-feedback">
      Please provide a valid Counrty.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="border-0 out rounded pointer btn-color py-2 px-3" type="submit">Submit form</button>
  </div>
</form>
    </div>
    <div className='container d-flex justify-content-around mb-5 bg-white p-3 mt-2'>
      <button type="button" class="btn bg-white "
      style={{
        color: "#7c4859",
        border:"1px solid #7c4859",

      }}>Back</button>
      <button type="button" class=" border-0 out rounded pointer btn-color px-3">Save & continue</button>

    </div>
      </div>
  )
}

export default Checkout