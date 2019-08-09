import axios from 'axios';

const api = axios.create({
    baseURL: 'http://backend-teste-dev.sa-east-1.elasticbeanstalk.com'
});

export default api;