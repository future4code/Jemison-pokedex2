import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { PokeCardContainer } from "./styled";


const PokeCard = ({pokemon, addToCart }) => { 
    const navigate = useNavigate();

    return(
        <PokeCardContainer>
            <img alt={pokemon.name} src={pokemon.url}/>
            <h3>{pokemon.name}</h3>
            <div>
                <button onClick={() => addToCart(pokemon)} >Adicionar</button>
                <button onClick={() => goToDetailsPage(navigate)}>Ver detalhes</button>
            </div>
        </PokeCardContainer>
    )
}

export default PokeCard;
