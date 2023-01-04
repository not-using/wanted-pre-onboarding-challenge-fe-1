import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: window.localStorage.getItem("token"),
  },
});

export default axiosInstance;
