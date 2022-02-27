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

export const patchApi = async( enpoint, id, data  ) => {
    try {
        const resp = await axios({
            method: 'patch',
            url: `${baseURL}${enpoint}/${id}`,
            data:data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':getToken(),
            }
        })
        return {
            status: resp.status,
            data: resp.data
        }
    } catch (error) {
        return {
            status: error.resp.status,
            error: error.message,
            data: error.resp.data
        }
    }
}
export default Get