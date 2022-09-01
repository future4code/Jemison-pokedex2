import React, { useEffect, useState } from "react";
import AppBar from "../AppBar/AppBar";
import PokeCard from "./PokeCard";
import axios from'axios';
import { HomeContainer } from "./styled";

function Home({cart, setCart}) {
    
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
        console.log('PERFIL',response.data.results)
        setData(response.data.results)
    }).catch((error) => {
        console.log(error)
    })
    }, [])

    const addToCart = (pokemon) => {
        const newCart = [...cart, pokemon]
        setCart(newCart)
    }
    console.log(cart)

    return(
        <div>
            <AppBar />
            <HomeContainer>
                {data && data.map((pokemon) => {
                    return <PokeCard key={pokemon.name} pokemon={pokemon} addToCart={addToCart} />
                })}
            </HomeContainer>
        </div>
    )
}

export default Home;
