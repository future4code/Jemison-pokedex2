import React from "react";
import * as Stl from './HeaderStl.js';
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordinator.js";
import logo from '../../Assets/Images/logo.png'
import homeIncon from '../../Assets/Images/homeIcon.png';


function HeaderPokedex() {

    const navigate = useNavigate()

    return (
        <Stl.Main>
            <Stl.Logo src={logo} />
            <Stl.BtnPokedex onClick={() => goToHome(navigate)}>
                <Stl.HomeIcon src={homeIncon}/>
                Home</Stl.BtnPokedex>
        </Stl.Main>
    )

}
export default HeaderPokedex;