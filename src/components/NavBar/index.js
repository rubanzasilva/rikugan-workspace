import React from 'react'
import { MobileIcon, NavBtn, NavBtnLink, NavBtnStyledText, NavContainer, NavItem, NavLinks, NavLogo, NavMenu, NavStyledText, NavWrapper} from './navBarElements'

const NavBar = () => {
  return (
    <NavWrapper>
        <NavContainer>
        
            <NavLogo to='/'>
            Xn2Y AI
            </NavLogo>

            <MobileIcon>

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
                             Free Trial
                        </NavStyledText>
                    </NavLinks>
                </NavItem>
            </NavMenu>

            <NavBtn>
                <NavBtnLink>
                    <NavBtnStyledText>
                         Docs
                    </NavBtnStyledText>
                </NavBtnLink>
            </NavBtn>

        </NavContainer>
    </NavWrapper>
    
  )
}

export default NavBar