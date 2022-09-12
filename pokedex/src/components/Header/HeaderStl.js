import styled from "styled-components";


export const Main = styled.header`
display:flex;
background-color: red;
margin: 0px;
padding: 0px;
border: solid 3px;
border-color: yellow;
justify-content:space-between;
`;

export const Logo = styled.img`
display:flex;
width: 150px;
margin-top: -40px;
margin-bottom: -50px;
margin-left: 20px;
`;

export const BtnPokedex = styled.button`
display:flex;
font-family: 'Tourney', cursive;
font-size:17px;
align-items:center;
align-self:center;
border: none;
border-radius:20px;
height:45px;
margin-right:15px;
background-color: white;
:hover{
 box-shadow: inset 0 0 1em #1E90FF, 0 0 1em #1E90FF;
  border-radius:100px; 
}
`;

export const PokedexIcon = styled.img`
display:flex;
width: 40px;
justify-content:flex-start;
margin-right:5px;
:hover{
width:43px;
 
}
`;

export const Count = styled.p`
width:13px;
font-size:13px;
border:none;
border-radius:100%;
background-color:red;
color:white;
margin-top:35px;
margin-left:-15px;
margin-right:5px;

`;

export const HomeIcon = styled.img`
display:flex;
width: 40px;
justify-content:flex-start;
margin-right:5px;
:hover{
width:43px;
 
}
`;