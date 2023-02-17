import axios from "axios";
import TokenService from "./token.service";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const accessToken  = await TokenService.getLocalAccessToken();
  
    if (accessToken) {
      config.headers["Authorization"] = 'Bearer ' + accessToken;  // for Spring Boot back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;