import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator";
// import { goToDetailsPage } from "../../Routes/coordinator";
import GlobalStateContext from '../../Context/GlobalContex.js';
import * as Stl from './HomeStl.js';

function Home() {

  const {pokemons, pokedex, lista,setLista, setPokemons, setPokedex}=useContext(GlobalStateContext)
  const navigate = useNavigate()
 
 
  const ListaPokemons = pokemons.map((pokemon) => {
   
    const goToDetailsPage = (navigate) => {navigate(`/detailspage/${pokemon.name}`)}
    return(      
    <Stl.Main key={pokemon.name}>
      <Stl.PokeName>{pokemon.id}</Stl.PokeName>
     <p>{pokemon.name}</p>
     <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
     <button onClick={() => goToPokedex(navigate)}>pokedex</button>
         <button key={pokemon.id} onClick={() => goToDetailsPage(navigate, pokemon.name)}>detalhes</button>
     </Stl.Main>
     )
})
    
  return (
    <Stl.Main>
         {ListaPokemons}    
        </Stl.Main>
  )
}
export default Home
