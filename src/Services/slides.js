import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "./publicApiService";

export const getSlides = (search = "", skip = "", limit = "") => {
  const endPoint = `/slides?search=${search}&skip=${skip}&limit=${limit}`;
  const data = getRequest(endPoint);
};

export const getSlide = (id) => {
  const endPoint = `/slides/${id}`;
  const data = getRequest(endPoint);
};

export const createSlide = (data) => {
  const endPoint = `/slides`;
  const data = postRequest(endPoint, data);
};

export const updateSlide = (data) => {
  const endPoint = `/slides/${data.id}`;
  const data = putRequest(endPoint, data);
};

export const deleteSlide = (id) => {
  const endPoint = `/slides/${id}`;
  const data = deleteRequest(endPoint);
};
