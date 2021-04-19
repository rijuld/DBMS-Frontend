import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";

function Add_patient() {

  const history = useHistory();

  const [fname, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [pid, setpid] = useState("0");
  const [time_death, settime_death] = useState("0000-00-00");
  const [braindead, setbraindead] = useState("0");
  const [agreement, setagreement] = useState("");
  const [icuid, seticuid] = useState("0");
  const [did, setdid] = useState("0");
  const [password, setpassword] = useState("");
  const [pulse, setpulse] = useState("0");
  const [temp, settemp] = useState("0");
  const [bpd, setbpd] = useState("0");
  const [bps, setbps] = useState("0");
  const [comor, setcomor] = useState("");
  const [breathing, setbreathing] = useState("0");
  const [blood, setblood] = useState("");
  const [gender, setgender] = useState("");
  const [admission, setadmission] = useState("0000-00-00");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [street, setstreet] = useState("");
  const [house, sethouse] = useState("");
  const [reasons, setreasons] = useState("");
  const [dob, setdob] = useState("0000-00-00");
  const [phone_no1, setp1] = useState("0");
  const [phone_no2, setp2] = useState("");

  const addPatient = (e) => {
    e.preventDefault();
    console.log(pid);
    axios({
      method: "post",
      url: "http://localhost:5000/patient",
      data: qs.stringify({
        pid: pid,
        first_name: fname,
        last_name: lName,
        time_of_death: time_death,
        agreement: agreement,
        braindead: braindead,
        icuid: icuid,
        did: did,
        password: password,
        pulse: pulse,
        temp: temp,
        blood_pressure_dis: bpd,
        blood_pressure_sys: bps,
        comorbidity_status: comor,
        breathing_rate: breathing,
        blood_group: blood,
        gender: gender,
        admission_date: admission,
        city: city,
        state: state,
        pincode: pincode,
        street: street,
        house_number: house,
        reasons: reasons,
        dob: dob,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((res) => {
      console.log("this is the response.data.message " + res.status);
      const t = Number(res.status);
      if (t == 200) {
        history.push(`/patient_profile/${pid}`);
        console.log("we are inside this!");
        
      } else {
        toast("wrong id or password" );
      }
    });;;


    axios({
      method: "post",
      url: "http://localhost:5000/patientphone",
      data: qs.stringify({
        pid: pid,
        phone_no: phone_no1,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    phone_no2 &&
      axios({
        method: "post",
        url: "http://localhost:5000/patientphone",
        data: qs.stringify({
          pid: pid,
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
                  <h4 className="text-dark mb-4">Create a Patient Account</h4>
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
                          setfName(e.target.value);
                        }}
                      />
                      <input
                        className="form-control form-control-user"
                        type="text"
                        id="exampleLastName"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={(e) => {
                          setlName(e.target.value);
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
                      placeholder="Patient ID"
                      name="email"
                      onChange={(e) => {
                        setpid(e.target.value);
                      }}
                    />
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
                    <div className="col-sm-6">
                      <input
                        className="form-control form-control-user"
                        type="password"
                        id="exampleRepeatPasswordInput"
                        placeholder="Repeat Password"
                        name="password_repeat"
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
                  {/* End: DOB */}
                  <small>Date of Admission</small>
                  {/* Start: Admission Date */}
                  <input
                    className="form-control"
                    type="date"
                    onChange={(e) => {
                      setadmission(e.target.value);
                    }}
                  />
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
                  {/* End: Admission Date */}
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
                  <small>Blood Group</small>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Blood Group"
                    onChange={(e) => {
                      setblood(e.target.value);
                    }}
                  />
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
                  <small>Reason</small>
                  <textarea
                    className="form-control"
                    placeholder="Reason for Admission"
                    defaultValue={""}
                    onChange={(e) => {
                      setreasons(e.target.value);
                    }}
                  />
                  <small>Breathing Rate </small>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Breathing Rate"
                    onChange={(e) => {
                      setbreathing(e.target.value);
                    }}
                  />
                  <small>Blood Pressure(Sys)</small>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Blood Pressure(Sys))"
                    onChange={(e) => {
                      setbps(e.target.value);
                    }}
                  />
                  <small>Blood Pressure(Dys)</small>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Blood Pressure(Dys))"
                    onChange={(e) => {
                      setbpd(e.target.value);
                    }}
                  />
                  <small>Pulse Rate</small>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Pulse"
                    onChange={(e) => {
                      setpulse(e.target.value);
                    }}
                  />
                  <small>Temperature</small>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Temperature"
                    onChange={(e) => {
                      settemp(e.target.value);
                    }}
                  />
                  <small>Co-Morbidity Status</small>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Co-morbidity status"
                    onChange={(e) => {
                      setcomor(e.target.value);
                    }}
                  />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="formCheck-3"
                      onChange={(e) => {
                        setagreement(1);
                      }}
                    />
                    <label
                      className="form-check-label text-danger"
                      htmlFor="formCheck-3"
                    >
                      Do you agree for donating your organ incase you die
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-block text-white btn-user"
                    type="submit"
                    onClick={(e) => {
                      {
                        addPatient(e);
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
                <ToastContainer />
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_patient;
