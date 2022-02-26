import axios from 'axios';
import { baseURL } from './Api';



export const PutRequest = async(endpoint,id,body) => {
    try {
        let res = await axios({
            method: 'put',
            url:`${baseURL}${endpoint}/${id}`,
            body: body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':getToken(),
            }
        })
        return {
            status: res.status,
            data: res.data
        }
    }
    catch (error) {
        return {
            status: error.res.status,
            error: error.message,
            data: error.res.data
        }
    }
}




export default PutRequest