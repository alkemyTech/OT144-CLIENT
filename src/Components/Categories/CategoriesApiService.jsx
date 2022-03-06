import {getRequest, postRequest, putRequest, deleteRequest} from '../../Services/publicApiService';
const endPoint = '/categories';

export const getCategories = async () => {
    const response = await getRequest(endPoint);
    return response;
};

export const createCategories = async (data) => {
    const response = await postRequest(endPoint, data);
    return response;
}

export const getCategory = async (id) => {
    const response = await getRequest(endPoint, id);
    return response;
}

export const updateCategory = async (id, data) => {
    const response = await putRequest(endPoint, id, data);
    return response;
}

export const deleteCategory = async (id) => {
    const response = await deleteRequest(endPoint, id);
    return response;
}