import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login_admin() {
  const [emailid, setemailid] = useState("");
  const [pass, setlpass] = useState("");
  const password = "0000";
  const username = "root";
  const history = useHistory();
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
                        <h4 className="text-dark mb-4">Hi Admin!</h4>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter ID..."
                            name="email"
                            onChange={(e) => {
                              setemailid(e.target.value);
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
                        <div>
                          <button
                            onClick={() => {
                              {
                                emailid == username && pass == password
                                  ? history.push("/admin")
                                  : toast("Oops wrong password or username!");
                              }
                            }}
                          >
                            Login
                          </button>
                          <ToastContainer />
                        </div>
                      </form>
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

export default Login_admin;
