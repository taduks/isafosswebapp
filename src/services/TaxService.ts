import axios from "axios";
import TaxDto from "./types/TaxDto";


const apiClient = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-type": "application/json",
    },
});
const findAll = async (access_token: string) => {
    const response = await apiClient.get<TaxDto>("/taxes", {
        headers: {
            Authorization: 'Bearer ' + access_token
        }});
    return response.data;
}

const findById = async (id: any) => {
    const response = await apiClient.get<TaxDto>(`/taxes/${id}`);
    return response.data;
}

const TutorialService = {
    findAll,
    findById
}
export default TutorialService;