import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator";
import { goToDetailsPage } from "../../Routes/coordinator";
import GlobalStateContext from '../../Context/GlobalContex.js';
import * as Stl from './HomeStl.js';

function Home() {

  const {pokemons, pokedex, lista, paginacao, setPaginacao, setLista, setPokemons, setPokedex}
    =useContext(GlobalStateContext)

  const navigate = useNavigate();
  return (
    <Stl.Main>
      {pokemons.map(cardsPoke => (
        <div key={cardsPoke.name}>
         <p>{cardsPoke.name}</p>
         
         <img src={cardsPoke.sprites.other.dream_world.front_default} alt={cardsPoke.name}/>
         <button onClick={() => goToPokedex(navigate)}>pokedex</button>
         <button onClick={() => goToDetailsPage(navigate)}>detalhes</button>
         </div>
        
      
      ))}
       </Stl.Main>

  )


}




export default Home
