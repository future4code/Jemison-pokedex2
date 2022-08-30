import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

function AppBarPokedex() {
    const navigate = useNavigate();

    return (
        <div>
        <button onClick={() => goToHome(navigate)}>Home</button>
        <h1>Pokemons</h1>
    </div>
    )
}

export default AppBarPokedex;