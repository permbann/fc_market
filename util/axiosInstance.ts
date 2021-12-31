import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: `${process.env.MARKET_URL}/api`,
  baseURL: "/api",
});
axiosInstance.defaults.headers.common["Authorization"] =
  process.env.MARKET_API_KEY || "";

export default axiosInstance;
