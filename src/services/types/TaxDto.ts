export default interface TaxDto {
    count: number;
    items:  Tax[];
}

interface Tax {
    id: string;
    name: string;
    description: string;
    tax_rate: string;
    country: string;
    ns_id: string;
}