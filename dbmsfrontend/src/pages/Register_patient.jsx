import React from 'react';



function Register_patient() {
  return (
    <div className="container">
  <div className="card shadow-lg o-hidden border-0 my-5">
    <div className="card-body p-0">
      <div className="row">
        <div className="col-lg-5 d-none d-lg-flex">
        </div>
        <div className="col-lg-7">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Create a Patient Account</h4>
            </div>
            <form className="user">
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Patient Name" name="first_name" />
                </div>
              </div>
              <div className="form-group">
                <input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Patient ID" name="email" />
              </div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" />
                </div>
                <div className="col-sm-6">
                  <input className="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" />
                </div>
              </div>
              <small>Date of Birth</small>{/* Start: DOB */}<input className="form-control" type="date" name="DOB" />{/* End: DOB */}<small>Date of Admission</small>{/* Start: Admission Date */}<input className="form-control" type="date" />{/* End: Admission Date */}<small>Address of Patient</small><input className="form-control" type="text" placeholder="Address" /><small>Blood Group</small><input className="form-control" type="text" placeholder="Blood Group" /><small>Gender</small>
              <div className="input-group">
                <div className="input-group-prepend" />
                <div className="input-group-append" />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">Male</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="formCheck-4" /><label className="form-check-label" htmlFor="formCheck-4">Female</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">Other</label>
              </div>
              <small>Reason</small><textarea className="form-control" placeholder="Reason for Admission" defaultValue={""} /><small>Breathing Rate</small><input className="form-control" type="number" placeholder="Breathing Rate" /><small>Blood Pressure(Sys)</small><input className="form-control" type="number" placeholder="Blood Pressure(Sys))" /><small>Blood Pressure(Dys)</small><input className="form-control" type="number" placeholder="Blood Pressure(Dys))" /><small>Pulse Rate</small><input className="form-control" type="number" placeholder="Pulse" /><small>Temperature</small><input className="form-control" type="number" placeholder="Temperature" /><small>Co-Morbidity Status</small><input className="form-control" type="number" placeholder="Co-morbidity status" />
              <div className="form-check">
                <input className="form-check-input" type="radio" id="formCheck-3" /><label className="form-check-label text-danger" htmlFor="formCheck-3">Do you agree for donating your organ incase you
                  die</label>
              </div>
              <button className="btn btn-primary btn-block text-white btn-user" type="submit">
                Register Account
              </button>
    
            </form>
            <div className="text-center">
              <a className="small" href="forgot-password.html">Forgot Password?</a>
            </div>
            <div className="text-center">
              <a className="small" href="/login.html">Already have an account? Login!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Register_patient;
