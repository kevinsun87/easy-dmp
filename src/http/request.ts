import axios from 'axios'
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios'
import { exceptionStatus } from './exceptionStatus'

export interface BaseResponse<T = any> {
  code: string | number
  message: 'string'
  data: T
}

const service = axios.create({
    // baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    }, 
    (error: AxiosError) => {
        console.log('request error',error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
          return response
        }

        ElMessage.error(exceptionStatus(response.status))
        return response
    },
    (error: AxiosError) => {
        console.log('response error', error)
        const { response } = error
        if(response) {
            ElMessage.error(exceptionStatus(response.status))

            return Promise.reject(response.data)
        }

        ElMessage.error('网络异常，请稍后再试！')
    }
)


const requestInstance = <T = any>(config: AxiosRequestConfig, isShowTips: boolean): Promise<T> => {
  const conf = config
  return new Promise((resolve, reject) => {
    service
      .request<any, AxiosResponse<BaseResponse>>(conf)
      .then((res: AxiosResponse<BaseResponse>) => {
        let data = res.data
        if (data.code !== 0) {
          ElMessage.error(data.message)
          reject(data)
        } else {
          if (isShowTips) ElMessage.success(data.message)
          resolve(data as T)
        }
      })
  })
}


export default service

export const get = <T = any, U = any>(url: string, params: U, config: AxiosRequestConfig, isShowTips = false): Promise<T> => {
  return requestInstance<T>({ ...config, method: 'GET', url, params }, isShowTips)
}

export const post = <T = any, U = any>(url: string, data: U, config: AxiosRequestConfig, isShowTips = true): Promise<T> => {
  return  requestInstance<T>({ ...config, method: 'POST', url, data }, isShowTips)
}
