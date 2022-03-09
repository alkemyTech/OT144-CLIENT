import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "./publicApiService";

const endPoint = process.env.REACT_APP_URL_SLIDES;

export const getSlides = async () => {
  const response = await getRequest(endPoint);
  return response;
};

export const getSlide = async (id) => {
  const response = await getRequest(endPoint, id);
  return response;
};

export const createSlide = async (data) => {
  const response = await postRequest(endPoint, data);
  return response;
};

export const updateSlide = async (data) => {
  const response = await putRequest(endPoint, data.id, data);
  return response;
};

export const deleteSlide = async (id) => {
  const response = await deleteRequest(endPoint, id);
  return response;
};
