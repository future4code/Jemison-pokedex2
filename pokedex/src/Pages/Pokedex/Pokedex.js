import React, {useContext}from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordinator";
import GlobalStateContext from '../../Context/GlobalContex.js';
import * as Stl from './PokedexStl.js'



function Pokedex() {

    const { pokemons, pokedex, setPokemons, setPokedex, pageLimit, setPageLimit, homeList, setHomeList } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const goToDetailsPage = (navigate, id) => {
        navigate(`/detailspage/${id}`)
      }

      const RemoveToPokedex = ((selected) => {
    
        const removePokedex = pokedex.filter((removePoke) => {
            return removePoke.name !== selected.name
        })
             
        setPokedex(removePokedex)
        
        const removeHome = pokemons.filter((removePoke) => {
            return removePoke.name !== selected.name
           
          })
          
       
        
        })
        const renderPokedex = pokedex.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <button onClick={() => RemoveToPokedex(pokemon)}>remover</button>
                <button key={pokemon.id} onClick={() => goToDetailsPage(navigate, pokemon.name)}>detalhes</button>
              </div>
            )
          })

    return (
        <Stl.Main>
            <button onClick={() => goToHome(navigate)}>HomePage</button>
            <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
            {renderPokedex}
        </Stl.Main>
    )
}

export default Pokedex;