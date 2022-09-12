import axios from "axios";
import React, { useEffect, useState } from "react";
import GlobalStateContext from './GlobalContex.js';


const GlobalState = (props) => {

    //retorno do axios 
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    //lista que renderiza a home
    const [homeList, setHomeList] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageLimit, setPageLimit] = useState(0)

    


    useEffect(() => {

   
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageLimit}`)
            .then(response =>
                pokemonData(response.data.results),
            )
            .catch((error) => {
                console.log(error.response.message)
            })
        setLoading(false)

        const pokemonData = async (data) => {
            const loadingPokemon = await Promise.all(
                data.map(async (pokemon) => {
                    const pokemonRecord = await axios.get(pokemon.url)
                        .then((response) => response.data
                        )
                        .catch((error) => {
                            console.log(error)
                        })
                    return {
                        ...pokemonRecord,
                    }
                }),
            );
            setPokemons(loadingPokemon)
        }

        const RemoveFromHome = pokemons && pokemons.filter((pokemon) => {
            const onPokedex = pokedex && pokedex.some((pokemonPokedex) => {
                return pokemonPokedex.name === pokemon.name
            })
            if (onPokedex) {
                return false
            } else {
                return true
            }
        })
        setHomeList(RemoveFromHome)

    }, [pageLimit, homeList]);

    return (
        <GlobalStateContext.Provider value={{ pokemons, pokedex, loading, setPokemons, setPokedex, pageLimit, setPageLimit, homeList, setHomeList}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState