import { getRequest, postRequest, deleteRequest, putRequest } from "../../Services/privateApiService"

export function getActividades(){
    const endPoint = '/actividades'
    return (getRequest("news"))
}
 
export function getActividadesId(id){
    const endPoint = '/actividades'
    return (getRequest("news", id))
}
 
export const postActividades = async (data) => {
    const endPoint = '/actividades'
    const response = await postRequest(endPoint, data)
    return response
}
 
export function deleteActividades(id){
    const endPoint = '/actividades'
    return(deleteRequest("news", id))
}
 
export function updateActividades(id, bodyData){
    const endPoint = '/actividades'
    return (putRequest("news", id, bodyData))
}