import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import Products from "./Products";

function Dashboard() {
    const allProducts = [
        { "id": 0, "productName": "Headphone", "img": "https://tse4.mm.bing.net/th/id/OIP.IUjj--07Zott1hGDX10JzwHaHa?pid=ImgDet&w=765&h=765&rs=1", "price": 1500 },
        { "id": 1, "productName": "Smart Tv", "img": "https://tse4.mm.bing.net/th/id/OIP.InPK5t_9Vr6N0ERxO86jlwHaFS?pid=ImgDet&rs=1", "price": 22000 },
        { "id": 2, "productName": "Laptop", "img": "https://i5.walmartimages.com/asr/ee1840e1-d589-498f-810c-0d4ee6cc9a4e.f05cdc65e3976a4b7af1aec5806d8034.jpeg", "price": 68000 },
        { "id": 3, "productName": "Desktop", "img": "https://tse3.mm.bing.net/th/id/OIP.sSD5yychGN9g4-5-RPbcfwHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7", "price": 45000 },
        { "id": 4, "productName": "Power Bank", "img": "https://tse1.mm.bing.net/th/id/OIP.7SZ6Q-SBXnhKjydABlNftgHaFB?w=299&h=202&c=7&r=0&o=5&pid=1.7", "price": 5000 }
    ]
    const url = window.location.pathname.includes("products") || window.location.pathname.includes("dashboard")
    const [fav, setFav] = useState([])
    const addFav = (key) => {
        setFav((val) => [...val, allProducts[key]])
        console.log(fav)
    }
    const remFav = (key) => {
        const arr = fav;
        arr.splice(key, 1)
        setFav([...arr])
    }
    return (
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <Link to="/home" style={{ textDecoration: "none", marginLeft: "50px" }}>
                        <Typography variant="h6" color="#ffffff" component="div" >
                            Home
                        </Typography>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none", marginLeft: "50px" }}>
                        <Typography variant="h6" color="#ffffff" component="div" >
                            All Products
                        </Typography>
                    </Link>
                    <Link to="/favorites" style={{ textDecoration: "none", marginLeft: "50px" }}>
                        <Typography variant="h6" color="#ffffff" component="div">
                            Favorite Items
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            {url ? <Products addFav={addFav} allProducts={allProducts} /> : <Favorites fav={fav} remFav={remFav} />}
        </>
    )
}
export default Dashboard;