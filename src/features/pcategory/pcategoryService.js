import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category/`);
  //console.log(response.data);

  return response.data;
};

const pcategoryService = {
  getProductCategories,
};

export default pcategoryService;
