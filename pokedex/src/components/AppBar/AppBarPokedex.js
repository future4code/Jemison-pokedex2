import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";
import { AppBarPokedexContainer } from "./styled";

function AppBarPokedex() {
    const navigate = useNavigate();

    return (
    <AppBarPokedexContainer>
        <button onClick={() => goToHome(navigate)}>Home</button>
        <h1>Pokemons</h1>
    </AppBarPokedexContainer>
    )
}

export default AppBarPokedex;