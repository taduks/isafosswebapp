export default interface CustomerDto {
    count: number;
    items:  Customer[];
}

interface Customer {
    id: string;
    name: string;
    company_name: string;
    country_code: string;
    address_text: string;
    currency: string;
    tax_registration_code: string;
    ns_id: string;
    ns_modified_at: string;
    created_at: string;
    updated_at: string;
}