import { getRequest, postRequest, deleteRequest, putRequest } from "./privateApiService"
<<<<<<< HEAD:src/Services/ActivityApiService.js

export const getActividades = async () => {
    const endPoint = '/activities'
=======
const endPoint = process.env.REACT_APP_URL_ACTIVITIES
export const getActividades = async () => {
>>>>>>> 6d071b5c87adc64dee6e0409cb480e628b3e737c:src/Services/ServiceAPIActividades.js
    const response = await getRequest(endPoint)
    return response
}
 
export const getActividadesId = async (id) => {
<<<<<<< HEAD:src/Services/ActivityApiService.js
    const endPoint = '/activities'
=======
>>>>>>> 6d071b5c87adc64dee6e0409cb480e628b3e737c:src/Services/ServiceAPIActividades.js
    const response = await getRequest(endPoint, id)
    return response
}
 
export const postActividades = async (data) => {
<<<<<<< HEAD:src/Services/ActivityApiService.js
    const endPoint = '/activities'
=======
>>>>>>> 6d071b5c87adc64dee6e0409cb480e628b3e737c:src/Services/ServiceAPIActividades.js
    const response = await postRequest(endPoint, data)
    return response
}
 
export const deleteActividades = async (id) => {
<<<<<<< HEAD:src/Services/ActivityApiService.js
    const endPoint = '/activities'
=======
>>>>>>> 6d071b5c87adc64dee6e0409cb480e628b3e737c:src/Services/ServiceAPIActividades.js
    const response = await deleteRequest(endPoint, id)
    return response
}
 
export const updateActividades = async (id, data) => {
<<<<<<< HEAD:src/Services/ActivityApiService.js
    const endPoint = '/activities'
=======
>>>>>>> 6d071b5c87adc64dee6e0409cb480e628b3e737c:src/Services/ServiceAPIActividades.js
    const response = await putRequest(endPoint, id, data)
    return response
}