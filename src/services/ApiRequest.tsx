import axios from "axios";


const apiClient = (access_token: string) => {
    return axios.create({
        baseURL: "http://20.93.233.201:9000",
        headers: {
            "Content-type": "application/json",
            "Authorization": 'Bearer ' + access_token,
        },
    });
}


export default apiClient;