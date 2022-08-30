import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../components/Home/Home';
import Pokedex from '../components/Pokedex/Pokedex';
import DetailsPage from '../components/DetailsPage/DetailsPage'


const Router = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="detailspage" element={<DetailsPage/>}/>
        </Routes>
    </BrowserRouter>
)}

export default Router;