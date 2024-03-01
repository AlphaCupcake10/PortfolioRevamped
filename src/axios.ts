import axios from 'axios';

const API = axios.create({
    baseURL: 'https://diving-tempest-backend.vercel.app',
    timeout: 10000,
});

export default API;