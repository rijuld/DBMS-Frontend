
import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";

function Add_icu() {
  const [hName, sethName] = useState("");
  const [icut, seticut] = useState("0");
  const [icuid, seticuid] = useState("0");
  const [cap, setcap] = useState("0");
  const [reg, setreg] = useState("");
  
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [street, setstreet] = useState("");
  const [house, sethouse] = useState("");
  const [phone_no1, setp1] = useState("0");
  const [phone_no2, setp2] = useState("");
  

  const addicu =() =>{
    console.log(icuid);
    axios({ 
      method: "post",
      url: "http://localhost:5000/icu",
      data: qs.stringify({
       
       hospital_name: hName,
       
       icuid : icuid,
       capacity : cap,
        registration_no : reg ,
       
        icu_type : icut,
       city : city,
       state : state,
       pincode : pincode,
       street : street,
       house_number :house
       
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    axios({
      method: "post",
      url: "http://localhost:5000/icuphone",
      data: qs.stringify({
        icuid: icuid,
        contact_no: phone_no1,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    phone_no2 &&
      axios({
        method: "post",
        url: "http://localhost:5000/icuphone",
        data: qs.stringify({
          icuid: icuid,
          contact_no: phone_no2,
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
                  <h4 className="text-dark mb-4">Create a ICU Account</h4>
                </div>
                <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        id="exampleFirstName"
                        placeholder="Hospital Name "
                        name="first_name"
                        onChange={(e) => {
                          sethName(e.target.value);
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
                      placeholder="Capacity"
                      name="email"
                      onChange={(e) => {
                        setcap(e.target.value);
                      }}
                    />
                     <input
                      className="form-control form-control-user"
                      type="number"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="ICU TYPE"
                      name="email"
                      onChange={(e) => {
                        seticut(e.target.value);
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
                        type="text"
                        id="examplePasswordInput"
                        placeholder="Registration Number"
                        name="registration no."
                        onChange={(e) => {
                          setreg(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      
                    </div>
                  </div>

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
                  
                  <small>City</small>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="city"
                    onChange={(e) => {
                      setcity(e.target.value);
                    }}
                  />
                  <small>State</small>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="State"
                    onChange={(e) => {
                      setstate(e.target.value);
                    }}
                  />
                  <small>pincode</small>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="pincode"
                    onChange={(e) => {
                      setpincode(e.target.value);
                    }}
                  />
                  <small>Street</small>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Street"
                    onChange={(e) => {
                      setstreet(e.target.value);
                    }}
                  />
                  
                  <small>House number </small>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="House number"
                    onChange={(e) => {
                        sethouse(e.target.value);
                    }}
                  />
                  
                  <button
                    className="btn btn-primary btn-block text-white btn-user"
                    type="submit"
                    onClick={() => {
                      {
                        addicu();
                      }
                    }}
                  >
                    Register Account
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_icu;



