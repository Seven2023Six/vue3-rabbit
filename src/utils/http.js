// axios 基础封装
import axios from "axios"

const httpInstance = axios.create({
    baseURL: "localhost:8421",
    timeout: 5000
})

// 拦截器
// 请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstance
