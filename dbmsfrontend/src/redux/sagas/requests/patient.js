import axios from "axios";

export function requestGetPatient() {
  return axios.request({
    method: "get",
    url: `http://localhost:5000/patient/1`
  });
}
