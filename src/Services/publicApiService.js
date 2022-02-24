import axios from 'axios';

const config = {
    urlBase: '',
    headers: {
        Group: "01"                //Aqui va el ID del equipo!!
    }
}

export const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const postRequest = async(url, bodyData) => {
        try {
            let response = await axios({
                method: 'post',
                url: config.urlBase+url,
                data: bodyData,
                headers: config.headers
            })
            return {
                status: response.status,
                data: response.data
            }
        }
        catch (error) {
            console.log(error)
            return {
                status: error.response.status,
                error: error.message,
                data: error.response.data
            }
        }
}



