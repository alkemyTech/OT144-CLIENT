import { getRequest, postRequest, deleteRequest, putRequest } from "../../Services/privateApiService"

export const getNews = async () => {
    const response = await( getRequest("news"))
    return response
}

export function getNewsById(id){
    return (
        getRequest("news", id)
    )
}

export function postNews(bodyData){
   return (
       postRequest("news", bodyData)
    )
}

export function deleteNews(id){
    return(
        deleteRequest("news", id)
     )
 }

export function updateNews(id, bodyData){
    return (
        putRequest("news", id, bodyData)
    )
 }


