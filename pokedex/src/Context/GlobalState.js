import axios from "axios";
import React, { useEffect, useState } from "react";
import GlobalStateContext from './GlobalContex.js';


const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [lista, setLista] = useState([])
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {
           axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
           .then(response =>
            pokemonData(response.data.results),
            )
            .catch((error) => {
                console.log(error.response.message)
            })
            setLoading(false)
    }, []);
    const pokemonData = async (data) => {
        const loadingPokemon = await Promise.all(
            data.map(async(pokemon) => {
                const pokemonRecord = await axios.get(pokemon.url)
                .then((response) => response.data
                )
                .catch((error) => {
                    console.log(error)
                })
                return {
                    ...pokemonRecord,
                 
                }}),
        );
        setPokemons(loadingPokemon);
    }

   
    return (
        <GlobalStateContext.Provider value={{pokemons, pokedex, lista, setLista, setPokemons, setPokedex}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState