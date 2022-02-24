import axios from 'axios';

const config = {
    baseUrl:"",
    headers: {
        Group: "01"                //Aqui va el ID del equipo!!
    }
}

export const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const postRequest =  (url,bodyData,userToken) =>{
    try {
        let response = axios({
            method: 'post',
            url: config.baseUrl+url,
            data: bodyData,
            headers: {
                'Content-Type': 'application/json',
                'Authorization ':userToken,
                ...config.headers
            }
        })
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}


