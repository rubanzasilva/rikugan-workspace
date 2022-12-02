import React from 'react'
import { MobileIcon, NavBtn, NavBtnLink, NavContainer, NavItem, NavLinks, NavLogo, NavMenu, NavStyledText, NavWrapper,Title } from './navBarElements'

const NavBar = () => {
  return (
    <NavWrapper>
        <NavContainer>
        
            <NavLogo>
                <NavStyledText>
                    <Title level={4}>Xn2Y AI</Title>
                </NavStyledText>
            </NavLogo>

            <MobileIcon>

            </MobileIcon>

{/* add antd styling to navlinks via styled components css */}
            <NavMenu>
                <NavItem>
                    <NavLinks>
                    <NavStyledText>
                    <Title level={5}> About Us</Title>
                    </NavStyledText>
                    </NavLinks>
                </NavItem>
            </NavMenu>

            <NavMenu>
                <NavItem>
                    <NavLinks>
                        <NavStyledText>
                            <Title level={5}> Data Exploration</Title>
                        </NavStyledText>
                    </NavLinks>
                </NavItem>
            </NavMenu>

            <NavMenu>
                <NavItem>
                    <NavLinks>
                        <NavStyledText>
                            <Title level={5}> Data Transformation</Title>
                        </NavStyledText>
                    </NavLinks>
                </NavItem>
            </NavMenu>

            <NavBtn>
                <NavBtnLink>
                    <NavStyledText>
                        <Title level={5}> Feature Engineering</Title>
                    </NavStyledText>
                </NavBtnLink>
            </NavBtn>

        </NavContainer>
    </NavWrapper>
    
  )
}

export default NavBar