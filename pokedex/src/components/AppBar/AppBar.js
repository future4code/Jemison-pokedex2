import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";


function AppBar () {
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
            <h1>Pokemons</h1>
        </div>
    )
}

export default AppBar;