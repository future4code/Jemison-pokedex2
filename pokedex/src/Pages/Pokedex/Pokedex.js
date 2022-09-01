import React from "react";
import AppBarPokedex from "../AppBar/AppBarPokedex";
import * as Stl from './PokedexStl.js'



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
            <Stl.PokedexContainer>
                {cart.map((item) => {
                    return (
                        <p>1</p>
                     )
                })}
            </Stl.PokedexContainer>
            
        </div>
    )
}

export default Pokedex;