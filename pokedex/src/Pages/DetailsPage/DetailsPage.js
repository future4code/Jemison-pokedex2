import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordinator";
import { goToPokedex } from "../../Routes/coordinator";
import * as Stl from './DetailsPageStl.js';

function DetailsPage() {

    const navigate = useNavigate();
    return (
        <Stl.Main>
            <button onClick={() => goToHome(navigate)}>HomePage</button>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </Stl.Main>
    )
}

export default DetailsPage;