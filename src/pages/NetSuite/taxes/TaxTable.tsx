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
import TaxDto from "../../../services/types/TaxDto";
import TaxService from "../../../services/TaxService";
import {Column} from "../Column";

const queryClient = new QueryClient()

const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 250 },
    { id: 'description', label: 'Description', minWidth: 300 },
    {
        id: 'rate',
        label: 'Rate',
        minWidth: 50,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {id: 'country', label: 'Country', minWidth: 50, align: 'center',},
    {id: 'ns_id', label: 'Netsuite Id', minWidth: 50, align: 'center',},
];

function Taxes () {
    const {authState} = useOktaAuth();

    const accessToken = authState?.accessToken?.accessToken || "";

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const {isLoading: isLoadingTaxes, data: data, error: error} = useQuery<TaxDto, Error>(
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
                            <TableCell>{row.description}</TableCell>
                            <TableCell align="center">{row.tax_rate}</TableCell>
                            <TableCell align="center">{row.country}</TableCell>
                            <TableCell align="center">{row.ns_id}</TableCell>
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

export default function TaxTable() {
    return (
        <QueryClientProvider client={queryClient}>
            <Taxes/>
        </QueryClientProvider>
    )
}