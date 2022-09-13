import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as Stl from './DetailsPageStl.js';
import HeaderHome from '../../Components/Header/HeaderHome.js';


function DetailsPage() {

    const [selectedPokemon, setSelectedPokemon] = useState({})
    const [name, setName] = useState(useParams())
    const navigate = useNavigate()

    useEffect(() => {
        //O useParams está retornando um Objeto - transformando o objeto em string para conseguir chamar o axios
        var nameObject = JSON.stringify(name);
        var nameString = nameObject.slice(7, -2);
       
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nameString}/`)
            .then((res) => {
                setSelectedPokemon(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }, ([navigate]))

    return (
       
            
            <Stl.Main>
                <HeaderHome/>
                <Stl.Card>
                    <Stl.Name>{selectedPokemon && selectedPokemon.name}</Stl.Name>
                    <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} />
                    <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} />
                        
                           <div>
                    <p>Stats</p>
                    <div>
                        {selectedPokemon && selectedPokemon.stats && selectedPokemon.stats.map((stat) => {
                            return (
                                <p key={stat.stat.name}>
                                    <strong> {stat.stat.name}:  </strong> {stat.base_stat}
                                </p>
                            )
                        })}
                    </div>
                    <div>
                        <h3>Tipos</h3>
                        <div>
                            {
                                selectedPokemon && selectedPokemon.types && selectedPokemon.types.map((type) => {
                                    return (
                                        <div key={type.type.name}>
                                            <strong>{type.type.name} </strong>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h3>Habilidades</h3>
                        <div>
                            {
                                selectedPokemon && selectedPokemon.moves && selectedPokemon.abilities.map((abi) => {
                                    return (
                                        <div key={abi.ability.name}>
                                            <strong> {abi.ability.name} </strong>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                </Stl.Card>
            </Stl.Main>
     
    )
}
export default DetailsPage;