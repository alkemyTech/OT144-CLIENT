import {getRequest, postRequest, putRequest, deleteRequest} from '../../Services/publicApiService';

export const getCategories = async (search = "", skip = "", limit = "") => {
    const endPoint = `/categories?search=${search}&skip=${skip}&limit=${limit}`;
    const response = await getRequest(endPoint);
    return response;
};

export const createCategories = async (data) => {
    const endPoint = '/categories';
    const response = await postRequest(endPoint, data);
    return response;
}

export const getCategory = async (id) => {
    const endPoint = `/category/${id}`;
    const response = await getRequest(endPoint);
    return response;
}

export const updateCategory = async (id, data) => {
    const endPoint = `/category/${id}`;
    const response = await putRequest(endPoint, data);
    return response;
}

export const deleteCategory = async (id) => {
    const endPoint = `/category/${id}`;
    const response = await deleteRequest(endPoint);
    return response;
}