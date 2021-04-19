import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";
 
function Add_doctor() {
  const history =useHistory();
  const [did, setdid] = useState("");
  const [post, setpost] = useState("N/A");
  const [dob, setdob] = useState("00-00-0000");
  const [first_name, setfname] = useState("");
  const [last_name, setlname] = useState("");
  const [gender, setgender] = useState("");
  const [dept_id, setdept_id] = useState("");
  const [password, setpassword] = useState("");
  const [icuid, seticuid] = useState("");
  const [phone_no1, setp1] = useState("0");
  const [phone_no2, setp2] = useState("");
 
  const addDoctor = (e) => {
    //console.log(did);
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/doctor",
      data: qs.stringify({
        did: did,
        post: post,
        dob: dob,
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        dept_id: dept_id,
        password: password,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((res) => {
      console.log("this is the response.data.message " + res.status);
      const t = Number(res.status);
      if (t == 200) {
        history.push(`/doctor_profile/${did}`);
        console.log("we are inside this!");
        
      } else {
        toast("wrong id or password" );
      }
    });;;;
 
    axios({
      method: "post",
      url: "http://localhost:5000/doctorphone",
      data: qs.stringify({
        did: did,
        phone_no: phone_no1,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    phone_no2 &&
      axios({
        method: "post",
        url: "http://localhost:5000/doctorphone",
        data: qs.stringify({
          did: did,
          phone_no: phone_no2,
        }),
      });
  };
  return (
    <div className="container">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-flex"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">Create a Doctor Account</h4>
                </div>
                <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        id="exampleFirstName"
                        placeholder="First Name "
                        name="first_name"
                        onChange={(e) => {
                          setfname(e.target.value);
                        }}
                      />
                      <input
                        className="form-control form-control-user"
                        type="text"
                        id="exampleLastName"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={(e) => {
                          setlname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="number"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Doctor ID"
                      name="email"
                      onChange={(e) => {
                        setdid(e.target.value);
                      }}
                    />
                    <input
                      className="form-control form-control-user"
                      type="text"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Post"
                      name="email"
                      onChange={(e) => {
                        setpost(e.target.value);
                      }}
                    />
                    <input
                      className="form-control form-control-user"
                      type="number"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Department ID"
                      name="email"
                      onChange={(e) => {
                        setdept_id(e.target.value);
                      }}
                    />
                    <input
                      className="form-control form-control-user"
                      type="number"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="ICU ID"
                      name="email"
                      onChange={(e) => {
                        seticuid(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="password"
                        id="examplePasswordInput"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <small>Date of Birth</small>
                  {/* Start: DOB */}
                  <input
                    className="form-control"
                    type="date"
                    name="DOB"
                    onChange={(e) => {
                      setdob(e.target.value);
                    }}
                  />
                  <small>Phone Number 1</small>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="tel"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Phone Number #1"
                      name="email"
                      onChange={(e) => {
                        setp1(e.target.value);
                      }}
                    />
                  </div>
                  <small>Phone Number 2</small>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="tel"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Phone Number #2"
                      name="email"
                      onChange={(e) => {
                        setp2(e.target.value);
                      }}
                    />
                  </div>
                  <small>Gender</small>
                  <div className="input-group">
                    <div className="input-group-prepend" />
                    <div className="input-group-append" />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="formCheck-2"
                      onChange={(e) => {
                        setgender("M");
                      }}
                    />
                    <label className="form-check-label" htmlFor="formCheck-2">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="formCheck-4"
                      onChange={(e) => {
                        setgender("F");
                      }}
                    />
                    <label className="form-check-label" htmlFor="formCheck-4">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="formCheck-1"
                      onChange={(e) => {
                        setgender("O");
                      }}
                    />
                    <label className="form-check-label" htmlFor="formCheck-1">
                      Other
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-block text-white btn-user"
                    type="submit"
                    onClick={(e) => {
                      {
                        addDoctor(e);
                        //add_phoneno();
                      }
                    }}
                  >
                    Register Account
                  </button>
                </form>
                <div className="text-center">
                  <a className="small" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a className="small" href="/login.html">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Add_doctor;