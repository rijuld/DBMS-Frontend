import axios from "axios";

export function requestGetDoctor() {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/doctor/3"
  });
}
