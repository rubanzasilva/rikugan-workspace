import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { Typography } from 'antd';

export const { Title } = Typography;

export const NavWrapper = styled.nav`
 height: 120px;
 ${'' /* padding-top:24px; */}
 display:flex;
 justify-content:center;
 align-items:center;
 position:sticky;
 border:border-box;
 background-color: #000;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;

 @media screen and (max-width:960px) {
     transition: 0.8s all ease;
     height:80px;
     padding:2vh;
 }


`
export const NavContainer = styled.div`
display:flex;
justify-content:space-between;
height:120px;
width:80vw;
padding: 0;
max-width:2400px;

 @media screen and (max-width:960px) {
     width:80%;
        
    }
`

export const NavStyledText = styled(Typography)`
color:#fff;

`

export const NavBtnStyledText = styled(Typography)`

${'' /* padding-top:7vh; */}
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
display:none;

@media screen and (max-width:780px) {
     display:block;
     position:absolute;
     top:0;
     right:0;
     transform: translate(-100%,60%);
     font-size:1.8rem;
     cursor:pointer;
     color:#66C3FF;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;

@media screen and (max-width:760px) {
     display:none;
 }
`

export const NavItem = styled.li`
height:80px;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
`

export const NavLinks = styled(LinkR)`
color: #66C3FF;
display:flex;
 align-items:center;
 text-decoration:none;
 padding:0 24px;
 height:100%;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 font-size:16px;

 

 &:visited {
    color:red;
}

&:hover {
    color:#00a886;
    border-bottom: 2px solid #66C3FF;
    
}

&:active {
    border-bottom: 2px solid #66C3FF;
    color:blue;
}

@media screen and (max-width:960px) {
    padding:0 12px ;
}

`

export const NavBtn = styled.div`
display:flex;
align-items:center;


 @media screen and (max-width:768px) {
     display:none;
 }
`
export const NavBtnLink = styled(LinkR)`
text-decoration:none;

&:hover {
    color:#00a886;
    border-bottom: 2px solid #fff;
    
}
`
export const NavImg = styled.img`
`

