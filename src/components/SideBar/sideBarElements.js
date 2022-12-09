import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { Typography } from "antd";

//design for the whole sidebar container when its clicked
export const SideBarContainer = styled.aside`
 position:fixed;
 z-index:999;
 width:100%;
 height:100%;
 background:#000;
 display:grid;
 align-items:center;
 top:0;
 left:0;
 transititon: 0.3s ease-in-out;
 
 /* Helps with the side bar toggle button showing up on mobile and not desktop */
 opacity: ${({ isOpen}) => (isOpen ? '100%' : '0' )};
 top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};

`

export const Icon = styled.div`
 position:absolute;
 top:1.2rem;
 right:1.5rem;
 background:transparent;
 font-size:2rem;
 cursor:pointer;
 outline:none;
`

export const CloseIcon = styled(FaTimes)`
 color:#66C3FF;
`

export const SideBarWrapper = styled.div`
 color:#66C3FF;
`

export const SideBarMenu = styled.ul`
 display:grid;
 grid-template-columns: 1fr;
 grid-template-rows:repeat(6, 80px);
 text-align:center;

 @media screen and (max-width:480px) {
     grid-template-rows:repeat(6,80px);
 }
`


export const SideBtnWrap = styled.div`
 display:flex;
 justify-content:center;
`

export const SideBarRoute = styled(LinkR)`
 padding: 16px 64px;
 color:#fff;
 background:#000;
 font-size:17px;
 cursor:pointer;
 transititon: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover {
     transititon: all 0.2s ease-in-out;
     background:#F7F2EF;
     color:#010606;
 }
`

export const SideBarText = styled(Typography)`
color:#66C3FF;
fontSize:17px;
lineHeight:1.10722;
fontWeight:400;
letterSpacing:.004em;
marginTop:6px;
fontFamily:Lato,Roboto;
`