import React, {useContext} from "react";
import * as Stl from './HeaderStl.js';
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator.js";
import logo from '../../Assets/Images/logo.png'
import pokedexIncon from '../../Assets/Images/podexIcon.png';
import GlobalStateContext from '../../Context/GlobalContex.js';


function HeaderHome() {

    const { pokedex} = useContext(GlobalStateContext)

    const navigate = useNavigate()

    return (
        <Stl.Main>
            <Stl.Logo src={logo} />
            <Stl.BtnPokedex onClick={() => goToPokedex(navigate)}>
                               <Stl.PokedexIcon src={pokedexIncon}/>
                               <Stl.Count>{pokedex.length}</Stl.Count>
                pokedex</Stl.BtnPokedex>
        </Stl.Main>
    )

}
export default HeaderHome;