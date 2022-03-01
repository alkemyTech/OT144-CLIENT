import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "../../Services/privateApiService";

export const getContact = async () => await getRequest("contacts");
export const getContactId = async (id) => await getRequest("contacts", id);
export const postContact = async (body) => await postRequest("contacts", body);
export const deleteContact = async (id) => await deleteRequest("contacts", id);
export const updateContact = async (id, body) =>
  await putRequest("contacts", id, body);
