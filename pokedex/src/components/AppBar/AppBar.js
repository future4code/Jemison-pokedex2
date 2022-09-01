import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";
import { AppBarContainer } from "./styled";


function AppBar () {
    const navigate = useNavigate();

    return(
        <Stl.AppBarContainer>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
            <h1>Pokemons</h1>
        </Stl.AppBarContainer>
    )
}

export default AppBar;