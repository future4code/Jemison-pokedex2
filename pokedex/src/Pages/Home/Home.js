import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator";
import GlobalStateContext from '../../Context/GlobalContex.js';
import * as Stl from './HomeStl.js';

function Home() {

  const { pokemons, pokedex, setPokemons, setPokedex, pageLimit, setPageLimit, homeList, setHomeList} = useContext(GlobalStateContext)
  const navigate = useNavigate()
  
    const goToDetailsPage = (navigate, id) => {
      navigate(`/detailspage/${id}`)
    }

    const NextPage = () => {
      if (pageLimit < 140) {
        setPageLimit(pageLimit + 20)
      }
      else if (pageLimit > 141) {
        setPageLimit(141)
      }
      else if (pageLimit === 140) {
        setPageLimit(0)
        alert("Acabaram os Pokemons")
      }
    }
    const PreviousPage = () => {
      if (pageLimit > 20) {
        setPageLimit(pageLimit - 20)
      }
      else if (pageLimit > 20 || pageLimit === 20) {
        setPageLimit(0)
      }
    }
    const AddToPokedex = ((selected) => {

      pokedex.push(selected)
      setPokedex(pokedex)
    
     
})

    const renderList = homeList && homeList.map((pokemon) => {
      return (
        <Stl.Main key={pokemon.name}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <Stl.Sprite src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          <button onClick={() => AddToPokedex(pokemon)}>Adicionar</button>
          <button key={pokemon.id} onClick={() => goToDetailsPage(navigate, pokemon.name)}>detalhes</button>
        </Stl.Main>
      )
    })

    return (
      <Stl.Main>

        <button onClick={() => goToPokedex(navigate)}>Ir para pokedex</button>
        <button onClick={() => PreviousPage()}>Anterior</button>
        <button onClick={() => NextPage()}>próximo</button>
        {renderList}
        <button onClick={() => PreviousPage()}>Anterior</button>
        <button onClick={() => NextPage()}>próximo</button>
      </Stl.Main>
    )
    

}

export default Home
