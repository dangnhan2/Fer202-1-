import axios from "axios";

const getMenu = () => {
  return axios.get("https://api-demo-4gqb.onrender.com/products");
};

const login = (usename, password) => {
  return axios.post("https://api-demo-4gqb.onrender.com/users/login");
};

export { getMenu, login };
