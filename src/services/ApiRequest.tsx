import axios from "axios";


const apiClient = (access_token: string) => {
    return axios.create({
        baseURL: process.env.ISAF_OSS_SERVICE_URL,
        headers: {
            "Content-type": "application/json",
            "Authorization": 'Bearer ' + access_token,
        },
    });
}


export default apiClient;