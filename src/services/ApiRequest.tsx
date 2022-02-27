import axios from "axios";


const client = axios.create({
    baseURL: 'http://localhost:9000/',
    headers: {
        "Content-type": "application/json",
    },
});

const apiRequest = (token: string, { ...options }) => {

    client.defaults.headers.common.Authorization = `Bearer ${token}`;

    const onSuccess = (response: any) => response;
    const onError = (error: any) => {
        return error;
    }

    return client(options).then(onSuccess).catch(onError);
}

export default apiRequest;