import { getRequest, postRequest, deleteRequest, putRequest } from "../../Services/privateApiService"

export const getActividades = async () => {
    const endPoint = 'actividades'
    const response = await getRequest(endPoint)
    return response
}
 
export const getActividadesId = async (id) => {
    const endPoint = 'actividades'
    const response = await getRequest(endPoint, id)
    return response
}
 
export const postActividades = async (data) => {
    const endPoint = 'actividades'
    const response = await postRequest(endPoint, data)
    return response
}
 
export const deleteActividades = async (id) => {
    const endPoint = 'actividades'
    const response = await deleteRequest(endPoint, id)
    return response
}
 
export const updateActividades = async (id, data) => {
    const endPoint = 'actividades'
    const response = await putRequest(endPoint, id, data)
    return response
}