import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";

export const getAllMembers = async () => {
  const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`;
  const response = await getRequest(endPoint);
  return response;
};

export const getMember = async (id) => {
  const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`;
  const response = await getRequest(endPoint, id);
  return response;
};

export const createMember = async (data) => {
  const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`;
  const response = await postRequest(endPoint, data);
  return response;
};

export const updateMember = async (id, body) => {
  const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`;
  const response = await putRequest(endPoint, id, body);
  return response;
};

export const deleteMember = async (id) => {
  const endPoint = `${process.env.REACT_APP_URL_MEMBERS}`;
  const response = await deleteRequest(endPoint, id);
  return response;
};
