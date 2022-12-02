import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { Typography } from 'antd';

export const { Title } = Typography;

export const NavWrapper = styled.nav`
display:flex;
justify-content:center;
align-items:center;
position:sticky;
background-color:#66C3FF;

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

`
export const NavLogo = styled(LinkR)`
text-decoration:none;
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

`

export const NavBtn = styled.div`
`
export const NavBtnLink = styled(LinkR)`
text-decoration:none;
`
export const NavImg = styled.img`
`

