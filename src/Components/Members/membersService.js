import {getRequest, postRequest, deleteRequest, putRequest} from "../../Services/privateApiService"

export const getAllMembers = async () => {
    const endPoint = `/members`
    const response =  await getRequest(endPoint)
    return response
}

export const getMember = async (id) => {
    const endPoint = `/members/${id}`
    const response = await getRequest(endPoint)
    return response 
}

export const createMember = async (data) => {
    const endPoint = `/members`
    const response = await postRequest(endPoint, data)
    return response 
}

export const updateMember = async (id) => {
    const endPoint = `/members/${id}`
    const response = await putRequest(endPoint)
    return response 
}

export const deleteMember = async (id) => {
    const endPoint = `/members/${id}`
    const response = await deleteRequest(endPoint)
    return response 
}

