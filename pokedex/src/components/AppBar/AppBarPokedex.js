import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";
import * as Stl from './AppBarPokedexStl.js'

function AppBarPokedex() {
    const navigate = useNavigate();

    return (
    <Stl.AppBarPokedexContainer>
        <button onClick={() => goToHome(navigate)}>Home</button>
        <h1>Pokemons</h1>
    </Stl.AppBarPokedexContainer>
    )
}

export default AppBarPokedex;