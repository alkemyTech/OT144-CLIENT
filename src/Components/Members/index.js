
export const getMembers = async (search, skip, limit) => {
    const endPoint = `/members?search=${search}&skip=${skip}&limit=${limit}`
    const response =  await getRequest(endPoint)
    return response
}

export const getMember = async (id) => {
    const endPoint = `/members/${id}`
    const response = await getRequest(endPoint)
    return response 
}

export const postMember = async (data) => {
    const endPoint = `/members`
    const response = await getRequest(endPoint, data)
    return response 
}

export const putMember = async (id) => {
    const endPoint = `/members/${id}`
    const response = await getRequest(endPoint)
    return response 
}

export const deleteMember = async (id) => {
    const endPoint = `/members/${id}`
    const response = await getRequest(endPoint)
    return response 
}

