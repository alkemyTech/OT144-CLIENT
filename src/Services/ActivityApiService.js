import { getRequest, postRequest, deleteRequest, putRequest } from "./privateApiService"

export const getActividades = async () => {
    const endPoint = '/activities'
    const response = await getRequest(endPoint)
    return response
}
 
export const getActividadesId = async (id) => {
    const endPoint = '/activities'
    const response = await getRequest(endPoint, id)
    return response
}
 
export const postActividades = async (data) => {
    const endPoint = '/activities'
    const response = await postRequest(endPoint, data)
    return response
}
 
export const deleteActividades = async (id) => {
    const endPoint = '/activities'
    const response = await deleteRequest(endPoint, id)
    return response
}
 
export const updateActividades = async (id, data) => {
    const endPoint = '/activities'
    const response = await putRequest(endPoint, id, data)
    return response
}