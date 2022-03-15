import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import {useOktaAuth} from "@okta/okta-react";
import {ChangeEvent, useState} from "react";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import CustomersService from "../../../services/CustomerService";
import {Column} from "../Column";
import CustomerDto from "../../../services/types/CustomerDto";

const queryClient = new QueryClient()

const columns: Column[] = [
    {id: 'name', label: 'Name', minWidth: 200 },
    {id: 'company_name', label: 'Company name', minWidth: 200 },
    {id: 'country_code', label: 'Country', minWidth: 70, align: 'center' },
    {id: 'address_text', label: 'Address', minWidth: 170, align: 'left',},
    {id: 'currency', label: 'Currency', minWidth: 70, align: 'center',},
    {id: 'tax_registration_code', label: 'Tax reg. code', minWidth: 170, align: 'left',},
];

function Customers () {
    const {authState} = useOktaAuth();

    const accessToken = authState?.accessToken?.accessToken || "";

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const {isLoading: isLoading, data: data, error: error} = useQuery<CustomerDto, Error>(
        "query-customers",
        async () => {
            return await CustomersService.findAll(accessToken);
        },
    );


    if (isLoading) return (
        <div>
            <h2>Loding...</h2>
        </div>
    )

    if (error) return (
        <div>'An error has occurred: ' + error.message</div>
    )

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ top: 57, minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? data!.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data!.items
                    ).map(row => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.company_name}</TableCell>
                            <TableCell align="center">{row.country_code}</TableCell>
                            <TableCell align="left">{row.address_text}</TableCell>
                            <TableCell align="center">{row.currency}</TableCell>
                            <TableCell align="left">{row.tax_registration_code}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            count={data!.count}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>

    );
}

export default function CustomersTable() {
    return (
        <QueryClientProvider client={queryClient}>
            <Customers/>
        </QueryClientProvider>
    )
}