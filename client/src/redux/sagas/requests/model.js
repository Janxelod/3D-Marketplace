import axios from "axios";

export function requestGetModel2D(modelID) {
   return axios.request({
      method: "get",
      url: `https://my-json-server.typicode.com/Janxelod/demo/images/${modelID}`
   });
};

export function requestGetModelComments(modelID) {
   return axios.request({
      method: "get",
      url: `https://my-json-server.typicode.com/Janxelod/demo/images/${modelID}/comments`
   });
}