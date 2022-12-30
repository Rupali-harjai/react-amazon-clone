import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:5001/app-2a72a/us-central1/api' // The API(Cloud function) url 
    baseURL: 'http://127.0.0.1:5001/app-2a72a/us-central1/api'
});

export default instance;

