import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home/Home.js';
import Pokedex from '../Pages/Pokedex/Pokedex.js';
import DetailsPage from '../Pages/DetailsPage/DetailsPage'


const Router = () => {
  
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/detailspage/:id" element={<DetailsPage/>}/>
            <Route path="-1"/>
        </Routes>
    </BrowserRouter>
)}

export default Router;