import React from "react";
import AppBarPokedex from "../AppBar/AppBarPokedex";
import PokeCardPokedex from "./PokeCardPokedex";

function Pokedex() {
    return(
        <div>
            <AppBarPokedex/>
            <PokeCardPokedex/>
        </div>
    )
}

export default Pokedex;