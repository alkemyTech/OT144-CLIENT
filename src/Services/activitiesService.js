import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";

const endpoint = process.env.REACT_APP_API_ACTIVITIES;

export const getActivities = async () => {
  const response = await getRequest(endpoint);
  return response;
};

export const getActivitiesId = async (id) => {
  const response = await getRequest(endpoint, id);
  return response;
};

export const postActivities = async (bodyData) => {
  const response = await postRequest(endpoint, bodyData);
  return response;
};

export const deleteActivities = async (id) => {
  const response = await deleteRequest(endpoint, id);
  return response;
};

export const updateActivities = async (id, bodyData) => {
  const response = await putRequest(endpoint, id, bodyData);
  return response;
};
