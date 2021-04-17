import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import qs from "qs";
import { ToastContainer, toast } from "react-toastify";

let k = 0;

function Login_doctor(props) {
  const [did, setid] = useState("");
  const [password, setlpass] = useState("");
  const history = useHistory();
  const [loginStatus, setloginStatus] = useState(0);
  const ll = (e) => {
    e.preventDefault();
    console.log("this function is called");
    axios
      .post(
        "http://localhost:5000/login_doctor",
        qs.stringify({
          did: did,
          password: password,
        }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log("this is the response.data.message " + res.status);
        const t = Number(res.status);
        if (t == 200) {
          history.push(`/doctor_profile/${did}`);
          console.log("we are inside this!");
          setloginStatus(1);
        } else {
          toast("wrong id or password");
        }
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-9 col-lg-12 col-xl-10"
            style={{ background: "black", borderRadius: 16 }}
          >
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex"></div>
                  <div className="col-lg-6">
                    <div className="p-5" style={{ borderRadius: 26 }}>
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Hi Doctor!</h4>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            type="number"
                            id="exampleInputEmail"
                            placeholder="Enter ID..."
                            name="ID"
                            onChange={(e) => {
                              setid(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => {
                              setlpass(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                htmlFor="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          className="form-control form-control-user"
                          onClick={(e) => {
                            {
                              ll(e);

                              if (loginStatus == 1) {
                                history.push(`/doctor_profile/${did}`);
                              }
                            }
                          }}
                        >
                          Hola!
                        </button>
                        <h1>{loginStatus}</h1>
                      </form>
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/register.html">
                          Create an Account!
                        </a>
                      </div>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_doctor;
