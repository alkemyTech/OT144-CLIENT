import axios from 'axios';

const config = {
    headers: {
        Group: 144
    }
}

export const getRequest =  async(url,id,getToken) =>{
    try {
        let response = await axios({
            method: 'get',
            url: `${url}/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':getToken(),
                ...config.headers
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


