import { API_BASE_URL } from '../utilities'

export const getUsers = async () => {

    try{
        const response = await fetch(`${API_BASE_URL}/users`)
        
        if(!response.ok) throw new NetworkError()
    
        const data = await response.json()
        return data

    } catch(err) {
        throw err
    }
}

export const updateUserRecord = async (user_id, record) => {

    try{
        const response = await fetch(`${API_BASE_URL}/update-record/${user_id}/${record}`)
        if(!response.ok) throw new NetworkError()

        return response
    
    } catch(err){
        throw err
    }
}

class NetworkError extends Error {
    constructor(){
        super('Error de red')
    }
}