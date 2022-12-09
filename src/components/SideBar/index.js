import React from 'react'
import {SideBarContainer, Icon ,CloseIcon,SideBarWrapper,SideBarMenu,SideBtnWrap,SideBarRoute,SideBarText} from './sideBarElements'



const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWrapper>
            <SideBarMenu>

            <SideBarRoute to='/product'>
              <SideBarText> About Us</SideBarText>
            </SideBarRoute>

            <SideBarRoute to='/product'>
              <SideBarText> Data Exploration</SideBarText>
            </SideBarRoute>

            <SideBarRoute to='/product'>
              <SideBarText id='features'>Feature Engineering</SideBarText>
            </SideBarRoute>

            <SideBarRoute to='/product'>
              <SideBarText id='freeTrial'>Free Trial</SideBarText>
            </SideBarRoute>
            
            <SideBtnWrap>
              <SideBarRoute>
    {/* input text into button element */}
                  <SideBarText>
                    Docs
                  </SideBarText>
              </SideBarRoute>

            </SideBtnWrap>
            
            </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>

    );
};

export default SideBar