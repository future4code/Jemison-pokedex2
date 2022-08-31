import React, { useEffect, useState } from "react";
import AppBar from "../AppBar/AppBar";
import PokeCard from "./PokeCard";
import axios from'axios';

function Home() {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
        console.log('PERFIL',response.data.results)
        setData(response.data.results)
    }).catch((error) => {
        console.log(error)
    })
    }, [])

    return(
        <div>
            <AppBar />
            {data && data.map((pokemon, index) => {
                return <PokeCard key={index} pokemon={pokemon}/>
            })}
        </div>
    )
}

export default Home;
