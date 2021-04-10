import axios from "axios";

export function requestGetDoctorAll() {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/doctor"
  });
}
