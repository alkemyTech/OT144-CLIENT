import {getRequest, postRequest, putRequest, deleteRequest} from '../../Services/publicApiService';
const endpoint = process.env.REACT_APP_API_TESTIMONIALS;

export const getTestimonials = async () => {
    const response = await getRequest(endpoint);
    return response;
};

export const createTestimonials = async (data) => {
    const response = await postRequest(endpoint, data);
    return response;
}

export const getTestimonial = async (id) => {
    const response = await getRequest(endpoint, id);
    return response;
}

export const updateTestimonial = async (id, data) => {
    const response = await putRequest(endpoint, id, data);
    return response;
}

export const deleteTestimonial = async (id) => {
    const response = await deleteRequest(endpoint, id);
    return response;
}