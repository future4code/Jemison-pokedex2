import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage, goToPokedex } from "../../routes/coordinator";
import * as Stl from './AppBarDetailsPageStl.js'


function AppBarDetailsPage() {
    const navigate = useNavigate();

    return(
        <Stl.AppBarDetailsPageContainer>
            <button onClick={() => goToLastPage(navigate) } >Voltar</button>
            <h2>Nome do Pokemon</h2>
            <button onClick={() => goToPokedex(navigate)}>Ir pra Pokedex</button>
        </Stl.AppBarDetailsPageContainer>
    )

}

export default AppBarDetailsPage;