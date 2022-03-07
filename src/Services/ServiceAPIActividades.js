import { getRequest, postRequest, deleteRequest, putRequest } from "./privateApiService"
const endPoint = REACT_APP_URL_ACTIVITIES
export const getActividades = async () => {
    const response = await getRequest(endPoint)
    return response
}
 
export const getActividadesId = async (id) => {
    const response = await getRequest(endPoint, id)
    return response
}
 
export const postActividades = async (data) => {
    const response = await postRequest(endPoint, data)
    return response
}
 
export const deleteActividades = async (id) => {
    const response = await deleteRequest(endPoint, id)
    return response
}
 
export const updateActividades = async (id, data) => {
    const response = await putRequest(endPoint, id, data)
    return response
}