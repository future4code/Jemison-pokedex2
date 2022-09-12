import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from '../../Context/GlobalContex.js';
import HeaderPokedex from "../../Components/Header/HeaderPokedex";
import ReleaseIcon from '../../Assets/Images/releaseIcon.png';
import Details from '../../Assets/Images/detailsIcon.png';
import * as Stl from './PokedexStl.js';




function Pokedex() {

    const { pokedex, setPokedex } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const goToDetailsPage = (navigate, id) => {
        navigate(`/detailspage/${id}`)
    }

    const RemoveToPokedex = ((selected) => {

        const removePokedex = pokedex.filter((removePoke) => {
            return removePoke.name !== selected.name
        })

        setPokedex(removePokedex)


    })
    const renderPokedex = pokedex.map((pokemon) => {
        return (
            <Stl.Card key={pokemon.name}>
                <Stl.PokeImg src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                <Stl.NamePoke>{pokemon.name}</Stl.NamePoke>
                <Stl.Btns>
                    <Stl.BtnRelease onClick={() => RemoveToPokedex(pokemon)}>
                        <Stl.RlsIcon src={ReleaseIcon} />
                        Soltar</Stl.BtnRelease>
                    <Stl.BtnDetails key={pokemon.id} onClick={() => goToDetailsPage(navigate, pokemon.name)}>
                        <Stl.DetailsIcon src={Details} />
                        detalhes</Stl.BtnDetails>
                </Stl.Btns>
            </Stl.Card>
        )
    })

    return (
        <Stl.Main>
            <HeaderPokedex />
            {renderPokedex}
        </Stl.Main>
    )
}

export default Pokedex;