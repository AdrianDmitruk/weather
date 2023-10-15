import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
