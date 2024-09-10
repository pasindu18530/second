import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, Button, TableRow } from "@mui/material";

const UsersTable = ({rows})=>{
    return(
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                rows.map(row =>(
                    <TableRow key={row.id} sx={{'&:last child td,&:last child th' : {border:0} }}>
                    <TableCell component='th' scope='row'>{row.id}
                    <TableCell component='th' scope='row'>{row.id}<TableCell component='th' scope='row'>{row.id}
                    </TableCell>
                    </TableCell>
                    </TableCell>
                    <Button
                         sx={{margin:'0px 10px'}}
                         onclick={()=>{}}>

                            Update

                    </Button>

                    <Button
                         sx={{margin:'0px 10px'}}
                         onclick={()=>{}}>

                            Delete

                    </Button>
                    </TableRow>
                )
            )
                }
            </TableBody>
        </Table>

    </TableContainer>

);

    

}

export default UsersTable;