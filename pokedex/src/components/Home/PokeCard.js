import React from "react";

const PokeCard = ({profile}) => { 
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

export default PokeCard;
