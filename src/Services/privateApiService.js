import axios from 'axios';
import { baseURL } from './Api';

const config = {
    headers: {
        "Group": 144
    }
}

export const getRequest =  async(url,getToken,id = null) =>{
    try {
        let response = await axios({
            method: 'get',
            url: id===null ?`${baseURL}${url}` : `${baseURL}${url}/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':getToken(),
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


