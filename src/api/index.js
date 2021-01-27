import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
  return request;
});

export default axios;
