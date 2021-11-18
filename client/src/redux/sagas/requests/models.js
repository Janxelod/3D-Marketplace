import axios from "axios";

export function requestGetModels(params) {
   return axios.request({
      method: "get",
      url: `https://my-json-server.typicode.com/Janxelod/demo/images/${params || ""}`
   });
};