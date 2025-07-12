import axios from 'axios'
import type { AxiosError } from 'axios'

const service = axios.create({
    // baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(
    (config) => {
        return config
    }, 
    (error: AxiosError) => {
        console.log('request error',error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        return response
    },
    (error: AxiosError) => {
        console.log('response error', error)
        
        if(error.response) {
            
        }

        return Promise.reject(error)
    }
)








export default service