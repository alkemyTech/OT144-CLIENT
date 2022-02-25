import axios from 'axios';

const getToken = () => {
    const token = localStorage.getItem("token") || "";
    return {
        Authorization:`Bearer ${token}`
    };
};

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

export default Get