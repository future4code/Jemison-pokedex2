import React from "react";
import AppBarPokedex from "../AppBar/AppBarPokedex";
import PokeCardPokedex from "./PokeCardPokedex";
import { PokedexContainer } from "./styled";


function Pokedex({cart, setCart}) {

const onClickRemove = (pokemon) => {
    const pokemonIndex = cart.findIndex((item) => item.name === pokemon.name)
    const newCart = [...cart]

    newCart.splice(pokemonIndex, 1)
    setCart(newCart)
}

    return(
        <div>
            <AppBarPokedex/>
            <PokedexContainer>
                {cart.map((item) => {
                    return (<PokeCardPokedex key={item.name} item={item} onClickRemove={onClickRemove}/>

                    )
                })}
            </PokedexContainer>
            
        </div>
    )
}

export default Pokedex;