import {Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {useRouter} from "next/navigation";
import {Pokemon} from "@/app/types/pokemon";

export default function PokemonTable({rows, pageSize, handleChangePage, count, page}:
    {rows: Pokemon[], pageSize: number, handleChangePage: (e: any, page: number) => void, count: number, page: number}) {
    const router = useRouter();
    return (
        <>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Sprite</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!!rows.length && rows.map(row => (
                        <TableRow
                            onClick={() => router.push(`/pokemon?id=${row.id}`)}
                            hover
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="left">{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.types.map(({type}) => <li key={type.name}>{type.name}</li>)}</TableCell>
                            <TableCell>
                                <Avatar alt={row.name} src={row.sprites.front_default} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={count}
            rowsPerPage={pageSize}
            page={page}
            onPageChange={handleChangePage}
        />
    </>
    );
}