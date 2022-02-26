import axios from 'axios';
import { baseURL } from './Api';

const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


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

export default Get