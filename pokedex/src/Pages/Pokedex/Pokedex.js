import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordinator";
import { goToDetailsPage } from "../../Routes/coordinator";
import * as Stl from './PokedexStl.js'



function Pokedex() {

    const navigate = useNavigate();

    return (
        <Stl.Main>
            <button onClick={() => goToHome(navigate)}>HomePage</button>
            <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
        </Stl.Main>
    )
}

export default Pokedex;