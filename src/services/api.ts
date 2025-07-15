import axios from 'axios';

const API = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default API;