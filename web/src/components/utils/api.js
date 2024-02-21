import axios from "axios";
import { objectToQueryString } from "./url.js";
import { getStoredAuthToken } from "./authToken";

const defaults = {
  baseURL: "http://sycamon.thitoholdings.co.bw",
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: getStoredAuthToken()
      ? `Bearer ${getStoredAuthToken()}`
      : undefined,
  }),
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

const api = (method, url, variables) =>
  new Promise((resolve, reject) => {
    console.trace(url);
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          if (error.response.status == 403 || error.response.status == 401) {
            localStorage.clear();
            window.location.href = "/login";
            console.log("Error...." + error.response.status);
            reject(error.response.data.error);
          } else {
            reject(error.response.data.error);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });

export default {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  put: (...args) => api("put", ...args),
  patch: (...args) => api("patch", ...args),
  delete: (...args) => api("delete", ...args),
};
