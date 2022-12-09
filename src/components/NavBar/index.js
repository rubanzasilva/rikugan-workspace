import React from 'react'
import { MobileIcon, NavBtn, NavBtnLink, NavBtnStyledText, NavContainer, NavItem, NavLinks, NavLogo, NavMenu, NavStyledText, NavWrapper} from './navBarElements'
import {FaBars} from 'react-icons/fa'

const NavBar = ({toggle}) => {
  return (
    <NavWrapper id='Nav Wrapper'>
        <NavContainer id='Nav Container'>
        
            <NavLogo to='/'>
            Xn2Y Ai
            </NavLogo>

            <MobileIcon onClick={toggle} id='mobileIcon'>
            <FaBars/>
            </MobileIcon>

{/* add antd styling to navlinks via styled components css */}
            <NavMenu>
                <NavItem>
                    <NavLinks>
                    <NavStyledText>
                    About Us
                    </NavStyledText>
                    </NavLinks>
                </NavItem>
            </NavMenu>

            <NavMenu>
                <NavItem>
                    <NavLinks>
                        <NavStyledText>
                         Data Exploration
                        </NavStyledText>
                    </NavLinks>
                </NavItem>
            </NavMenu>

            <NavMenu>
                <NavItem>
                    <NavLinks to='/product'>
                        <NavStyledText>
                             Documentation
                        </NavStyledText>
                    </NavLinks>
                </NavItem>
            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/'>
                    <NavBtnStyledText>
                         Free Trial
                    </NavBtnStyledText>
                </NavBtnLink>
            </NavBtn>

        </NavContainer>
    </NavWrapper>
    
  )
}

export default NavBar