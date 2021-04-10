import axios from "axios";

export function requestGetIcu() {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/icu/1"
  });
}
