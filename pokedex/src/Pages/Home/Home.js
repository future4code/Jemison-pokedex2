import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from '../../Context/GlobalContex.js';
import * as Stl from './HomeStl.js';
import HeaderHome from '../../Components/Header/HeaderHome.js';
import Capture from '../../Assets/Images/capturarIcon.png';
import Details from '../../Assets/Images/detailsIcon.png';
import Next from '../../Assets/Images/nextIcon.png';
import Prev from '../../Assets/Images/prevIcon.png';


function Home() {

  const { pokedex, setPokedex, pageLimit, setPageLimit, homeList } = useContext(GlobalStateContext)
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
      <Stl.Card key={pokemon.name}>
        <Stl.NamePoke>{pokemon.name}</Stl.NamePoke>
        <Stl.Sprite src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        <Stl.Btns>
          <Stl.BtnCapture onClick={() => AddToPokedex(pokemon)}>
            <Stl.CaptureIcon src={Capture} />
            Capturar</Stl.BtnCapture>
          <Stl.BtnDetails key={pokemon.id} onClick={() => goToDetailsPage(navigate, pokemon.name)}>
            <Stl.DetailsIcon src={Details} />
            detalhes</Stl.BtnDetails>
        </Stl.Btns>
      </Stl.Card>
    )
  })

  return (
    <Stl.Main>
      <HeaderHome />
      <Stl.BtnsArr>
        <Stl.BtnPrev onClick={() => PreviousPage()}>
          <Stl.PrevIcon src={Prev} />
          Anterior</Stl.BtnPrev>
        <Stl.BtnNext onClick={() => NextPage()}>Próxima
          <Stl.NextIcon src={Next} />
        </Stl.BtnNext>
      </Stl.BtnsArr>
      <Stl.Cards>
        {renderList}
        </Stl.Cards>
        <Stl.BtnsArr>
        <Stl.BtnPrev onClick={() => PreviousPage()}>
          <Stl.PrevIcon src={Prev} />
          Anterior</Stl.BtnPrev>
        <Stl.BtnNext onClick={() => NextPage()}>Próxima
          <Stl.NextIcon src={Next} />
        </Stl.BtnNext>
      </Stl.BtnsArr>
    </Stl.Main>

  )


}

export default Home
