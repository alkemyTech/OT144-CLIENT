import {
  getRequest,
  deleteRequest,
  putRequest,
  postRequest,
} from "./privateApiService";
const endpoint = "/users";

export const getUsers = async () => {
  try {
    const response = await getRequest(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await getRequest(endpoint, id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await postRequest(endpoint, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await putRequest(endpoint, id, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await deleteRequest(endpoint, id);
    return response.data;
  } catch (error) {
    throw error;
  }
};
