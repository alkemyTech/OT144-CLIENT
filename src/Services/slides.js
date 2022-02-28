import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "./publicApiService";

export const getSlides = async (search = "", skip = "", limit = "") => {
  const endPoint = `/slides?search=${search}&skip=${skip}&limit=${limit}`;
  const response = await getRequest(endPoint);
  return response;
};

export const getSlide = async (id) => {
  const endPoint = `/slides/${id}`;
  const response = await getRequest(endPoint);
  return response;
};

export const createSlide = async (data) => {
  const endPoint = `/slides`;
  const response = await postRequest(endPoint, data);
  return response;
};

export const updateSlide = async (data) => {
  const endPoint = `/slides/${data.id}`;
  const response = await putRequest(endPoint, data);
  return response;
};

export const deleteSlide = async (id) => {
  const endPoint = `/slides/${id}`;
  const response = await deleteRequest(endPoint);
  return response;
};
