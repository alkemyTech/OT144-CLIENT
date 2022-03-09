import { getRequest, postRequest, deleteRequest, putRequest } from "./privateApiService"
const endPoint = process.env.REACT_APP_URL_ACTIVITIES
export const getActivities = async () => {
    const response = await getRequest(endPoint)
    return response
}
 
export const getActivitiesId = async (id) => {
    const response = await getRequest(endPoint, id)
    return response
}
 
export const postActivities = async (data) => {
    const response = await postRequest(endPoint, data)
    return response
}
 
export const deleteActivities = async (id) => {
    const response = await deleteRequest(endPoint, id)
    return response
}
 
export const updateActivities = async (id, data) => {
    const response = await putRequest(endPoint, id, data)
    return response
}