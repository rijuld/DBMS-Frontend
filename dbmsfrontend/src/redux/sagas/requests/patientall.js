import axios from "axios";

export function requestGetPatientAll() {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/patient"
  });
}
