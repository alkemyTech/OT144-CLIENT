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
        Group: "01"                
    }
}

export const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const postRequest =  async(endpoint,bodyData) =>{
    try {
        let  response = await axios({
            method: 'post',
            url: baseURL+endpoint,
            data: bodyData,
            headers: {
                'Content-Type': 'application/json',
                ...getToken(),
                ...config.headers
            }
        })
        // console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }
    catch (error) {
        console.log(error)
        return {
            status: error.response.status,
            error: error,
            data: error.response.data
        }
    }
}


