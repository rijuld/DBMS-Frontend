import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";
function Organ_recieve() {
  const { id } = useParams();

  const [organ, setOrgan] = useState();
  const [org, setorg] = useState(1);
  useEffect(() => {
    axios.get(`http://localhost:5000/organ`).then((res) => {
      const organ = res.data;
      setOrgan(organ);
    });
  }, []);
  const action = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/receiveorgans",
      data: qs.stringify({
        patientid: id,
        organid: org,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  };

  const history = useHistory();
  const notify = () => toast("Oops wrong password or username!");
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
                        <h4 className="text-dark mb-4">
                          Which organ do you want to receive?
                        </h4>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <label>
                            Which organ do you want to receive?
                            <select
                              onChange={(e) => {
                                setorg(e.target.value);
                              }}
                              className="form-control form-control-user"
                            >
                              {organ &&
                                organ.map((n) => [
                                  <option value={`${n.organid}`}>
                                    {n.organ_name}
                                  </option>,
                                ])}
                            </select>
                          </label>
                        </div>

                        <label>Hope you find one soon</label>

                        <div>
                          <button
                            className="form-control form-control-user"
                            onClick={() => {
                              {
                                action();
                              }
                            }}
                          >
                            Ask for this organ
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

export default Organ_recieve;
