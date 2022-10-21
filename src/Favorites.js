import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Favorites(props) {
    const rowsPerPageOptionList = [3, 5, 10];
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    return (
        <React.Fragment>
            <br /><br /><br /><br />
            <Typography variant="h6" color="inherit" component="div">
                Your Favorite Items
            </Typography>
            <TableContainer component={Paper} style={{ maxWidth: "700px", marginLeft: "300px", marginTop: "50px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ fontWeight: "bold" }}>
                                Product Name
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                                Product Picture
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                                Price
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>
                                Remove From Favorites
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.fav.length ?
                            (rowsPerPage > 0
                                ? props.fav?.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                : props.fav
                            )?.map((item, key) => {
                                return (
                                    <TableRow
                                        key={item.id}
                                    >
                                        <TableCell>
                                            {item.productName}
                                        </TableCell>
                                        <TableCell>
                                            <img
                                                src={item.img}
                                                alt="Product img" height="50px" width="50px" />
                                        </TableCell>
                                        <TableCell >
                                            {item.price}
                                        </TableCell>
                                        <TableCell >
                                            <IconButton onClick={() => props.remFav(key)}><FavoriteBorderIcon /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                            : (
                                <TableRow><TableCell >
                                    <Typography textAlign={"center"}>No item added by you yet!</Typography>
                                </TableCell></TableRow>
                            )}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                style={{
                    width: "0px !important",
                    fontWeight: "bold !important",
                    marginRight: "350px"
                }}
                rowsPerPageOptions={rowsPerPageOptionList}
                component="div"
                count={props.fav?.length}
                labelRowsPerPage="Rows per Page"
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </React.Fragment>
    )
}
export default Favorites;