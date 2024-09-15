import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/admin-login`, userData);
  //console.log(response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  //console.log(getTokenFromLocalStorage);
  const response = await axios.get(`${base_url}user/getallorders`, config);
  //console.log(response.data);

  return response.data;
};

const authService = {
  login,
  getOrders,
};

export default authService;
