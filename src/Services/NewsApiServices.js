import { getRequest, postRequest, deleteRequest, putRequest } from "./privateApiService"
const endpointNews = process.env.REACT_APP_URL_NEWS

export const getNews = async () => {
    const response = await getRequest(endpointNews)
    return response;
}

export const getNewsById = async (id) => {
    const response = await getRequest(endpointNews, id)
    return response;
}

export const postNews = async (bodyData) => {
    const response = await postRequest(endpointNews, bodyData)
    return response;
}

export const deleteNews = async (id) => {
    const response = await deleteRequest(endpointNews, id)
    return response;
 }

export const updateNews = async (id, bodyData) => {
    const response = await putRequest(endpointNews, id, bodyData)
    return response;
 }


