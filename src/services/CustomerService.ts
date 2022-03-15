import apiClient from "./ApiRequest";
import CustomerDto from "./types/CustomerDto";


const findAll = async (access_token: string) => {
    const response = await apiClient(access_token).get<CustomerDto>("/customers" );
    return response.data;
}

const findById = async (id: any, access_token: string) => {
    const response = await apiClient(access_token).get<CustomerDto>(`/customers/${id}`);
    return response.data;
}

const CustomerService = {
    findAll,
    findById
}
export default CustomerService;