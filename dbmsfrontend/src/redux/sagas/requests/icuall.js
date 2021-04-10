import axios from "axios";

export function requestGetIcuAll() {
  return axios.request({
    method: "get",
    url: "http://localhost:5000/icu"
  });
}
