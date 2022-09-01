import React, { useEffect, useState } from "react";
import AppBar from "../../components/AppBar/AppBar.js";
import CardPokemon from '../../components/CardPokemon/CardPokemon.js';
import { BASE_URL } from "../../constants/constantUrl.js";
import {useGetData} from '../../Hooks/useGetData.js'

function Home() {
    const [profileToChoose, setProfileToChoose] = useState({})
    
    const [data, isLoadingTrips, errorTrips] = useGetData(`${BASE_URL}`)


    return(
        <div>
            <AppBar />
            <CardPokemon profile={profileToChoose}/>
        </div>
    )
}

export default Home;
