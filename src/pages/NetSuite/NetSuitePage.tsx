import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

interface Tax {
    id: string;
    name: string;
    description: string;
    tax_rate: string;
    country: string;
    ns_id: string;
}

function Example() {

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:9000/taxes').then(res =>
            res.json()
        )
    )

    if (isLoading) return (
        <div>
            <h2>Loding...</h2>
        </div>
        )

    if (error) return (
        <div>'An error has occurred: ' + error.message</div>
            )

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
                    {data.items.map((row: Tax) => (
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
            </Table>
        </TableContainer>

    );
}

function NetSuitePage() {
    return(
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
}

export default NetSuitePage as any