import apiClient from "./ApiRequest";
import VendorDto from "./types/VendorDto";


const findAll = async (access_token: string) => {
    const response = await apiClient(access_token).get<VendorDto>("/vendors" );
    return response.data;
}

const findById = async (id: any, access_token: string) => {
    const response = await apiClient(access_token).get<VendorDto>(`/vendors/${id}`);
    return response.data;
}

const VendorService = {
    findAll,
    findById
}
export default VendorService;