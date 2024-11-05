import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'https://devburguer-api-production-2e57.up.railway.app/'
})

api.interceptors.request.use(async config => {
    const userData = localStorage.getItem('codeburger:userData')
    const token = userData && JSON.parse(userData).token
    config.headers = {
        Authorization: `Bearer ${token}`
    }
    return config
})

export default api;
