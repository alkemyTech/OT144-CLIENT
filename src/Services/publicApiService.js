import axios from "axios";
import { baseURL } from "./Api";

const config = {
  headers: {
    Group: 144, //Aqui va el ID del equipo!!
  },
};

export const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const postRequest = async (url, body) => {
  try {
    const response = await axios.post(`${baseURL}${url}`, body);
    return response;
  } catch (e) {
    alert("Error al enviar la información!");
  }
};
