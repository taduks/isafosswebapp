import TaxDto from "./types/TaxDto";
import apiClient from "./ApiRequest";

const findAll = async (access_token: string) => {
    const response = await apiClient(access_token).get<TaxDto>("/taxes" );
    return response.data;
}

const findById = async (id: any, access_token: string) => {
    const response = await apiClient(access_token).get<TaxDto>(`/taxes/${id}`);
    return response.data;
}

const TaxesService = {
    findAll,
    findById
}
export default TaxesService;