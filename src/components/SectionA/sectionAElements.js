import styled from "styled-components";

export const SectionAContainer = styled.section`
display:grid;
grid-template-columns:1fr 1fr;
list-style-type:none;
margin:24px;
border:2px solid #000;

@media screen and (max-width:960px) {
    grid-template-columns:1fr;
    align-items:Center;
    text-align:Center;
    margin:16px;
}

`

export const ColumnLeft = styled.div`
background-color:#fff;
text-align:center;
order:${({reverse}) => (reverse ? '2' : '1')};
`
export const ColumnRight = styled.div`
background-color:#fff;
text-align:center;
order:${({reverse}) => (reverse ? '1' : '2')};

@media screen and (max-width:768px) {
    ${'' /* regular positioning on mobile */}
    order:${({reverse}) => (reverse ? '2' : '1')};
}
`
export const SectionAContent = styled.div`
margin:auto;
line-height:75px;
display:flex;
flex-direction:column;
text-align:center;
align-content:center;
padding:64px;

@media screen and (max-width:780px) {
     margin:16px 0 16px 0;
     padding:32px;

 }
`

export const SectionATitle = styled.div`
font-size:1.75em;
line-height:1.10722;
font-weight:400;
letter-spacing:-.005em;
margin-top:6px;
font-family:Lato;
color:#66C3FF;
`

export const SectionAText = styled.div`
color:#66C3FF;
font-size:16px;
line-height:1.2381;
font-weight:200;
letter-spacing:.016em;
margin-top:15px;
margin-bottom:15px;
font-family:Roboto;
`

//column 2
export const ImgWrap = styled.div`
    margin:auto;
 display:flex; 
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 text-align:center;


 @media screen and (max-width: 968px) {
    }
`

//removing the width causes element to go wild
export const Img = styled.img`
    margin:auto;
   width:100%;
   height:100%;
   object-fit:cover;
   left:0;
 display:flex; 
 flex-wrap:wrap;

 
 @media screen and (max-width:720px) {
     flex-direction:column;
     align-items:center;
     margin-top:0;

 }
`
