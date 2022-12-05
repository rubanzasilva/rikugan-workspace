import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { Typography } from 'antd';

export const { Title } = Typography;

export const NavWrapper = styled.nav`
display:flex;
justify-content:center;
align-items:center;
position:sticky;
background-color:#fff;

${'' /* border:border-box; */}
position:sticky;
font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
cursor:pointer;
/* From https://css.glass */
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

@media screen and (max-width:960px) {
     transition: 0.8s all ease;
 }
`
export const NavContainer = styled.div`
display:flex;
justify-content:space-between;
height:120px;
width:80vw;


@media screen and (max-width:960px) {
     width:80%;
        
    }
`

export const NavStyledText = styled(Typography)`

color:#000;

`

export const NavBtnStyledText = styled(Typography)`

padding-top:7vh;
color:#66C3FF;
justify-self:flex-end;
 cursor:pointer;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 font-weight:bold;
 text-decoration:none;

`


export const NavLogo = styled(LinkR)`
text-decoration:none;
 color:#66C3FF;
 justify-self:flex-start;
 cursor:pointer;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 ${'' /* margin-right:16px; */}
 left:0;
 font-weight:bold;
 text-decoration:none;

 @media screen and (max-width:960px) {
        transition: 0.8s all ease;
        justify-content:center;
        align-items:center;
        align-text:center;
        padding-top:16px;
        margin-right:34%;  
    }

`

export const MobileIcon = styled.div`
`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
`

export const NavItem = styled.li`
`

export const NavLinks = styled(LinkR)`
text-decoration:none;
color: #66C3FF;

`

export const NavBtn = styled.div`
`
export const NavBtnLink = styled(LinkR)`
text-decoration:none;
`
export const NavImg = styled.img`
`

