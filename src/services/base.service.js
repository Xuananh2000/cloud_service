import axios from 'axios'
import {HandleError, HandleResponse} from "@/utils/http-handler";

const rmAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

rmAxios.defaults.headers.post['Content-Type'] = 'application/json'
rmAxios.defaults.headers.put['Content-Type'] = 'application/json-patch+json'
rmAxios.interceptors.request.use()

rmAxios.interceptors.request.use(config => config, (error) => Promise.reject(error))
rmAxios.interceptors.response.use(res => HandleResponse(res), error => HandleError(error))

export default rmAxios
