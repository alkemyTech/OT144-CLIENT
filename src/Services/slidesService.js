import {
  getRequest,
  postRequest,
  putRequest,
} from "./publicApiService";

import { deleteRequest } from "./privateApiService";

export const getSlides = async (url) => {
  const response = await getRequest(url);
  return response;
};

export const getSlide = async (id) => {
  const response = await getRequest('/slides', id);
  return response;
};

export const createSlide = async (data) => {
  const response = await postRequest('/slides', data);
  return response;
};

export const updateSlide = async (data) => {
  const response = await putRequest('/slides', data.id, data);
  return response;
};

export const deleteSlide = async (id) => {
  const response = await deleteRequest('/slides', id);
  return response;
};
