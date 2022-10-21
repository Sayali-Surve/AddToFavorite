import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import React, { useState, memo } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Products(props) {
    const rowsPerPageOptionList = [3, 5, 10];
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        console.log("hii page")
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        console.log("event,", event.target.value)
        setRowsPerPage(event.target.value, 5);
        setPage(0);
    };

    return (
        <React.Fragment>
            <br /><br /><br /><br />
            <Typography variant="h6" color="inherit" component="div">
                See All The Products
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
                                Add To favorites
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? props.allProducts?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            : props.allProducts
                        )?.map((item, key) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.productName}
                                    </TableCell>
                                    <TableCell>
                                        <img src={item.img} alt="Product img" height="50px" width="50px" />
                                    </TableCell>
                                    <TableCell >
                                        {item.price}
                                    </TableCell>
                                    <TableCell >
                                        <IconButton onClick={() => props.addFav(key)}><FavoriteIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
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
                count={props.allProducts.length}
                labelRowsPerPage="Rows per Page"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPage={rowsPerPage}
                page={page}

            />

        </React.Fragment>

    )
}
export default memo(Products);