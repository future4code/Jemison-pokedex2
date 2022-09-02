import React from "react";
import * as Stl from './CardPokemonStl.js'
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";

const CardPokemon = ({profile}) => { 
    return(
        <div>
            <img src={profile.url}/>
            <p>{profile.name}</p>
            <div>
                <button>Adicionar</button>
                <button>Ver detalhes</button>
            </div>
        </div>
    )
}

export default CardPokemon;