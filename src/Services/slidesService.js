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
  const endPoint = `/slides`;
  const response = await getRequest(endPoint, id);
  return response;
};

export const createSlide = async (data) => {
  const endPoint = `/slides`;
  const response = await postRequest(endPoint, data);
  return response;
};

export const updateSlide = async (data) => {
  const endPoint = `/slides`;
  const response = await putRequest(endPoint, data.id, data);
  return response;
};

export const deleteSlide = async (id) => {
  const endPoint = `/slides`;
  const response = await deleteRequest(endPoint, id);
  return response;
};
