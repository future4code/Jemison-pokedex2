import styled from "styled-components"

export const Main = styled.div `
margin:-8px;
padding:0px;
`;

export const Card = styled.div`
display:flex;
flex-direction:row;
border: solid 3px;
border-color:red;
border-radius:10px;
margin:10px;
justify-content:space-between;
`;

export const NamePoke = styled.p`
font-family: 'Tourney', cursive;
font-size:30px;
text-align:center;
align-self:center;
@media (max-width: 400px ) {
   font-size:20px;
    
  }
`;

export const PokeImg = styled.img`
width:8%;
margin-left:6px;
margin-top:-10px;
@media (max-width: 400px ) {
    width:17%;
    margin-top:-5px;
 }
`;

export const Btns = styled.div`
display:flex;

`;

export const BtnRelease = styled.button`
display:flex;
font-family: 'Tourney', cursive;
font-size:15px;
align-items:center;
align-self:center;
border:solid 2px;
border-radius:20px;
height:40px;
margin-right:5px;
padding-right:1px;
border-color:red;
:hover{
 box-shadow: inset 0 0 1em #FF0000, 0 0 1em #FF0000;
  border-radius:100px; 
}
@media (max-width: 400px ) {
  font-size: 0px;
  margin:5px;
  
 }
`;

export const RlsIcon = styled.img`
display:flex;
width: 35px;
justify-content:flex-start;
margin-left:-5px;

`;

export const BtnDetails = styled.button`
display:flex;
font-family: 'Tourney', cursive;
font-size:12px;
align-items:center;
align-self:center;
border:solid 2px;
border-radius:20px;
height:40px;
padding:4px;
border-color:red;
color:black;
margin-right:5px;
:hover{
 box-shadow: inset 0 0 1em #FF0000, 0 0 1em #FF0000;
  border-radius:100px; 
}
@media (max-width: 400px ) {
  font-size: 0px;
  margin:5px;
  padding:7px;
 }
`;


export const DetailsIcon = styled.img`
display:flex;
width: 20px;
justify-content:flex-start;
margin-left:0px;
`;

