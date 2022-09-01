import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../components/Home/Home';
import Pokedex from '../components/Pokedex/Pokedex';
import DetailsPage from '../components/DetailsPage/DetailsPage'


const Router = () => {
    const [cart, setCart] = useState([])
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />}/>
            <Route path="/pokedex" element={<Pokedex cart={cart} setCart={setCart}/>}/>
            <Route path="/detailspage" element={<DetailsPage/>}/>
            <Route path="-1"/>
        </Routes>
    </BrowserRouter>
)}

export default Router;