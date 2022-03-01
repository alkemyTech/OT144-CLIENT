import axios from 'axios';
import { baseURL } from './Api';

const getToken = () => {
    const token = localStorage.getItem("token") === "undefined"
    ? ""
    : localStorage.getItem("token")
    || "";
    return {
        Authorization: `Bearer ${token}`
    };
};

const config = {
    headers: {
        Group: 144,
    }
}

export const getRequest =  async (url, id = null) => {
    try {
        const response = await axios({
            method: 'get',
            url: id === null ? `${baseURL}${url}` : `${baseURL}${url}/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken(),
            }
        })
        
        return {
            status: response.status,
            data: response.data
        }
    }
    catch (error) {
        return {
            status: error.response.status,
            error: error.message,
            data: error.response.data
        }
    }
}

export const deleteRequest = async (url, id) => {
    try{
        const response = await axios({
            method: 'delete',
            url: `${baseURL}/${url}/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken(),
                ...config.headers
                }
        })
        return {
            status: response.status,
            data: response.data
        }
    }
    catch(error){
        return {
            status: error.response.status,
            error: error.message,
            data: error.response.data
        }
    }

export const putRequest = async (endpoint, id, body) => {
    try {
        const response = await axios({
            method: 'put',
            url:`${baseURL}${endpoint}/${id}`,
            data: body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken(),
            }
        })
        return {
            status: response.status,
            data: response.data
        }
    }
    catch (error) {
        return {
            status: error.response.status,
            error: error.message,
            data: error.response.data
        }
    }
}
