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
} from '@mui/material'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {useOktaAuth} from "@okta/okta-react";
import {ChangeEvent, useState} from "react";
import TaxDto from "../../services/types/TaxDto";
import TaxService from "../../services/TaxService";

const queryClient = new QueryClient()



function TaxTable() {

    const { authState } = useOktaAuth();

    console.log(authState)
    const accessToken = authState?.accessToken?.accessToken || "";

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { isLoading: isLoadingTaxes, data: data, error: error} = useQuery<TaxDto, Error>(
        "query-taxes",
        async () => {
            return await TaxService.findAll(accessToken);
        },

    );


    if (isLoadingTaxes) return (
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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Rate</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Netsuite Id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? data!.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data!.items
                    ).map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell align="right">{row.tax_rate}</TableCell>
                            <TableCell align="right">{row.country}</TableCell>
                            <TableCell align="right">{row.ns_id}</TableCell>
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

function NetSuitePage() {
    return(
        <QueryClientProvider client={queryClient}>
            <TaxTable />
        </QueryClientProvider>
    );
}

export default NetSuitePage as any