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

export const postRequest = (url, bodyData) => {
        try {
            let response = axios({
                method: 'post',
                url: config.urlBase+url,
                data: bodyData,
                headers: config.headers
            })
            return response.data
        }
        catch (error) {
            console.log(error)
        }
}



