import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8101/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;
