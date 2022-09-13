import styled from "styled-components";


export const Card = styled.div`
display:flex;
flex-direction:column;
border: solid 5px;
border-color:red;
border-radius:20px;
padding:20px;
margin:20px;
align-self:center;
`;

export const Main = styled.div`
margin:-8px;
padding:0px;

`;

export const Cards = styled.div`
display:flex;
flex-wrap:wrap;
align-self:center;
margin-left:30px;
margin-top:-15px;

`;

export const Sprite = styled.img`
width:150px;
height:150px;
align-self:center;
margin:15px;

`;

export const NamePoke = styled.p`
font-family: 'Chewy', cursive;
font-size:35px;
margin-top:-23px ;
margin-bottom:-3px ;
text-align:center;
`;

export const Btns = styled.div`
display:flex;
margin-top:20px;
`;

export const BtnCapture = styled.button`
display:flex;
font-family: 'Tourney', cursive;
font-size:12px;
align-items:center;
align-self:center;
border:solid 2px;
border-radius:20px;
height:40px;
margin-right:5px;
padding-right:1px;
border-color:red;
color:#1E90FF;
:hover{
 box-shadow: inset 0 0 1em #FF0000, 0 0 1em #FF0000;
  border-radius:100px; 
}
`;

export const CaptureIcon = styled.img`
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
color:#1E90FF;
:hover{
 box-shadow: inset 0 0 1em #FF0000, 0 0 1em #FF0000;
  border-radius:100px; 
}
`;

export const DetailsIcon = styled.img`
display:flex;
width: 20px;
justify-content:flex-start;
margin-left:0px;
`;

export const BtnNext = styled.button`
display:flex;
font-family: 'Tourney', cursive;
font-size:20px;
align-items:center;
align-self:center;
border:solid 2px;
border-radius:20px;
height:50px;
padding:4px;
border-color:red;
color:black;
:hover{
 box-shadow: inset 0 0 1em #FF0000, 0 0 1em #FF0000;
  border-radius:100px; 
}
`;

export const NextIcon = styled.img`
display:flex;
width: 50px;
justify-content:flex-start;
margin-left:0px;
`;

export const BtnPrev = styled.button`
display:flex;
font-family: 'Tourney', cursive;
font-size:20px;
align-items:center;
align-self:center;
border:solid 2px;
border-radius:20px;
height:50px;
padding:4px;
border-color:red;
color:black;
:hover{
 box-shadow: inset 0 0 1em #FF0000, 0 0 1em #FF0000;
  border-radius:100px; 
}
`;

export const PrevIcon = styled.img`
display:flex;
width: 50px;
justify-content:flex-start;
margin-left:0px;
`;
export const BtnsArr = styled.div`
display:flex;
justify-content:space-between;
margin-left:1vw;
margin-right:1vw;
margin-top:20px;
margin-bottom:30px;

`;