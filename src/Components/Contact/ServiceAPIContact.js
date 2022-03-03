import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "../../Services/privateApiService";



export const getContact = async () => await getRequest(`${process.env.REACT_APP_URL_CONTACTS}`);
export const getContactId = async (id) => await getRequest(`${process.env.REACT_APP_URL_CONTACTS}`, id);
export const postContact = async (body) => await postRequest(`${process.env.REACT_APP_URL_CONTACTS}`, body);
export const deleteContact = async (id) => await deleteRequest(`${process.env.REACT_APP_URL_CONTACTS}`, id);
export const updateContact = async (id, body) =>
  await putRequest("contacts", id, body);
