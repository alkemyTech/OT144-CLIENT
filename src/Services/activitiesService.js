import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";

const endpoint = process.env.REACT_APP_API_ACTIVITIES;

export const getNews = async () => {
  const response = await getRequest(endpoint);
  return response;
};

export const getNewsById = async (id) => {
  const response = await getRequest(endpoint, id);
  return response;
};

export const postNews = async (bodyData) => {
  const response = await postRequest(endpoint, bodyData);
  return response;
};

export const deleteNews = async (id) => {
  const response = await deleteRequest(endpoint, id);
  return response;
};

export const updateNews = async (id, bodyData) => {
  const response = await putRequest(endpoint, id, bodyData);
  return response;
};
