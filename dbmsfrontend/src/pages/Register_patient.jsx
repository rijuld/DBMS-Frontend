import React from 'react';
import { useState } from "react";
import axios from 'axios';


function Register_patient() {

    const [fname , setfName]= useState("")
    const [lName , setlName]= useState("")
    const [pid , setpid]= useState("")
    const [time_death , settime_death]= useState("")
    const [braindead , setbraindead]= useState("")
    const [agreement , setagreement]= useState("")
    const [icuid , seticuid]= useState("")
    const [did , setdid]= useState("")
    const [password , setpassword]= useState("")
    const [pulse , setpulse]= useState("")
    const [temp , settemp]= useState("")
    const [bpd , setbpd]= useState("")
    const [bps , setbps]= useState("")
    const [comor , setcomor]= useState("")
    const [breathing , setbreathing]= useState("")
    const [blood , setblood]= useState("")
    const [gender , setgender]= useState("")
    const [admission , setadmission]= useState("")
    const [city , setcity]= useState("")
    const [state , setstate]= useState("")
    const [pincode , setpincode]= useState("")
    const [street , setstreet]= useState("")
    const [house , sethouse]= useState("")
    const [reasons , setreasons]= useState("")
    const [dob , setdob]= useState("")
  
    const addPatient =() =>{
      console.log(pid);
      axios.post('http://localhost:5000/patient',{
        pid: pid,
        first_name: fname,
         last_name: lName,
         time_of_death: time_death,
         agreement: agreement,
         braindead : braindead,
         icuid : icuid,
         did : did,
         password : password,
         pulse : pulse,
         temp,blood_pressure_dis : bpd,
         blood_pressure_sys : bps,
         comorbidity_status : comor,
         breathing_rate : breathing,
         blood_group : blood,
         gender : gender,
         admission_date : admission,
         city : city,
         state : state,
         pincode : pincode,
         street : street,
         house_number :house,
         reasons : reasons,
         dob : dob
          
      }).then(()=>{
        console.log("success")
      })
    }
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
                  <input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name " name="first_name" onChange={(e) =>{
        setfName(e.target.value);
      }}/>
      <input className="form-control form-control-user" type="text" id="exampleLastName" placeholder="Last Name" name="last_name" onChange={(e) =>{
        setfName(e.target.value);
      }}/>
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
