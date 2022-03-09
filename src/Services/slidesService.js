import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "./privateApiService";

export const getSlides = async () => {
  const response = await getRequest(`${process.env.REACT_APP_URL_SLIDES}`);
  return response;
};

export const getSlide = async (id) => {
  const response = await getRequest(`${process.env.REACT_APP_URL_SLIDES}`, id);
  return response;
};

export const createSlide = async (data) => {
  const response = await postRequest(`${process.env.REACT_APP_URL_SLIDES}`, data);
  return response;
};

export const updateSlide = async (id, data) => {
  const response = await putRequest(`${process.env.REACT_APP_URL_SLIDES}`, id, data);
  return response;
};

export const deleteSlide = async (id) => {
  const response = await deleteRequest(`${process.env.REACT_APP_URL_SLIDES}`, id);
  return response;
};