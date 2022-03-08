import {postRequest } from "./publicApiService";
import { getRequest, putRequest } from "./privateApiService";
const endpoint = process.env.REACT_APP_URL_ORGANIZATION;

export const getAllOrganizationData = async () => {
  const response = await getRequest(endpoint);
  return response;
};

export const getOrganizationData = async (id) => {
  const response = await getRequest(endpoint, id);
  return response;
};

export const createOrganizationData = async (data) => {
  const response = await postRequest(endpoint, data);
  return response;
};

export const updateOrganizationData = async (data) => {
  const response = await putRequest(endpoint, data.id, data);
  return response;
};
