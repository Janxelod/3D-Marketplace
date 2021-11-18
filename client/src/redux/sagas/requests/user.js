import axios from "axios";

export function requestGetUser(userId) {
   return axios.request({
      method: "get",
      url: `https://my-json-server.typicode.com/Janxelod/demo/users/${userId}`
   })
};

export function requestGetUserSkills() {
   return axios.request({
      method: "get",
      url: `https://my-json-server.typicode.com/Janxelod/demo/skills`
   })
};

export function requestGetUserModels(userId) {
   return axios.request({
      method: "get",
      url: `https://my-json-server.typicode.com/Janxelod/demo/users/${userId}/images`
   })
};

export function requestGetUserModelLike(imageId) {
   return axios.request({
      method: "get",
      url: `https://my-json-server.typicode.com/Janxelod/demo/images/${imageId}`
   })
};