import React, { useEffect, useState } from "react";
import AppBar from "../AppBar/AppBar";
import PokeCard from "./PokeCard";
import axios from'axios';

function Home() {
    const [profileToChoose, setProfileToChoose] = useState({})
    

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
            console.log('PERFIL',response.data.results)
            setProfileToChoose(response.data.results)
        })
    },[])


    return(
        <div>
            <AppBar />
            <PokeCard profile={profileToChoose}/>
        </div>
    )
}

export default Home;
