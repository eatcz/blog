// axios二次封装
// 引入axios
import axios from 'axios'

const Mockrequest = axios.create({
    baseURL:'/mock',
    timeout:5000
})

// 请求拦截器
Mockrequest.interceptors.request.use((config) =>{
    return config
})  

//响应拦截器
Mockrequest.interceptors.response.use((res) =>{
    return res.data
} , (err) =>{
    throw Error
})

export default Mockrequest