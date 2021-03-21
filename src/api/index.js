import axios from 'axios';
import authTokenConfig from './auth';

const API_SERVER_IP = "138.68.74.39";
axios.defaults.baseURL = `http://${API_SERVER_IP}/api/`;
axios.interceptors.request.use(config => {
    config = authTokenConfig(config);
    return config;
});
export default axios;
