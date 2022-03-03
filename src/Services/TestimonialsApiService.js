import {getRequest, postRequest, putRequest, deleteRequest} from '../../Services/publicApiService';
const endPoint = `${process.env.REACT_APP_API_TESTIMONIALS}`;

export const getTestimonials = async () => {
    const response = await getRequest(endPoint);
    return response;
};

export const createTestimonials = async (data) => {
    const response = await postRequest(endPoint, data);
    return response;
}

export const getTestimonial = async (id) => {
    const response = await getRequest(endPoint, id);
    return response;
}

export const updateTestimonial = async (id, data) => {
    const response = await putRequest(endPoint, id, data);
    return response;
}

export const deleteTestimonial = async (id) => {
    const response = await deleteRequest(endPoint, id);
    return response;
}