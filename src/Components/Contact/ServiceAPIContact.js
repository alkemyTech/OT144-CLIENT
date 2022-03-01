import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "../../Services/privateApiService";

export const getContact = () => getRequest("contacts");
export const getContactId = (id) => getRequest("contacts", id);
export const postContact = (body) => postRequest("contacts", body);
export const deleteContact = (id) => deleteRequest("contacts", id);
export const updateContact = (id, body) => putRequest("contacts", id, body);
