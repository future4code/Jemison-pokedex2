import React from "react";

const PokeCard = ({pokemon}) => { 
    return(
        <div>
            <img alt={pokemon.name} src={pokemon.url}/>
            <p>{pokemon.name}</p>
            <div>
                <button>Adicionar</button>
                <button>Ver detalhes</button>
            </div>
        </div>
    )
}

export default PokeCard;
