import axios from "axios";
import { baseURL } from "./Api";

const config = {
  headers: {
    Group: 144,
  },
};

export const getRequest = async (url, id = null) => {
  const endpoint = !id  ? `${baseURL}${url}` : `${baseURL}${url}/${id}`;
  try {
    const response = await axios.get(endpoint);
    return response;
  } catch (e) {
    alert("Error al traer la data");
  }
};

export const postRequest = async (url, body) => {
  try {
    const response = await axios.post(`${baseURL}${url}`, body);
    return response;
  } catch (e) {
    alert("Error al enviar la información!");
  }
};

export const putRequest = async (url, body) => {
  try {
    const response = await axios.put(`${baseURL}${url}`, body);
  } catch (e) {
    alert("Error al actualizar la información!");
  }
};
