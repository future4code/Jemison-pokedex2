import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { PokeCardPokedexContainer } from "./styled";

function PokeCardPokedex({ item, onClickRemove }){
    const navigate=useNavigate();

    return(
        <PokeCardPokedexContainer>
            <img alt={item.name} src={item.url}/>
            <h3>{item.name}</h3>
            <div>
                <button onClick={() => onClickRemove(item)} >Remover</button>
                <button onClick={() => goToDetailsPage(navigate) }>Ver detalhes</button>
            </div>
        </PokeCardPokedexContainer>
    )
}

export default PokeCardPokedex;