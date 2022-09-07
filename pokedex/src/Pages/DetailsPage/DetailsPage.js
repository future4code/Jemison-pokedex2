import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { goToHome } from "../../Routes/coordinator";
import { goToPokedex } from "../../Routes/coordinator";
import * as Stl from './DetailsPageStl.js';

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
        <div>
            <Stl.Main>
                <div>
                    {selectedPokemon && selectedPokemon.name}
                    <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} />
                    <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} />
                </div>
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
                        <h3>Types</h3>
                        <div>
                            {
                                selectedPokemon && selectedPokemon.types && selectedPokemon.types.map((type) => {
                                    return (
                                        <div key={type.type.name}>
                                            <strong> {type.type.name} </strong>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h3>Moves</h3>
                        <div>
                            {
                                selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move) => {
                                    return (
                                        <div key={move.move.name}>
                                            <strong> {move.move.name} </strong>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </Stl.Main>
        </div>
    )
}
export default DetailsPage;