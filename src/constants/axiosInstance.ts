import axios from "axios";

export const axiosInstanceWithToken = axios.create({
  withCredentials: true,
  headers: {
    Authorization: window.localStorage.getItem("token"),
  },
});
