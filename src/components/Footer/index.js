import React from 'react';
import { CollapseWrap, FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksTitle, FooterLinksWrapper, FooterWrapper, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './footerElements';
import {BackTop} from 'antd';

const { Panel } = CollapseWrap;

const Footer = () => {
  return (
    <FooterContainer id='footerContainerA'>

    <FooterWrapper id='footerWrapperB'>
        <FooterLinksWrapper id='footerWrapperC'>

        <FooterLinksContainer>

        <FooterLinksItems>
            <FooterLinksTitle>Ingest Data</FooterLinksTitle>
            <FooterLink to='/'>Upload</FooterLink>
            <FooterLink to='/'>Connect to various sources</FooterLink>
        </FooterLinksItems>

        
        <FooterLinksItems>
            <FooterLinksTitle> Data Exploration </FooterLinksTitle>
            <FooterLink to='/product'> Data Inspection </FooterLink>
            <FooterLink to='/product'> Data Visualizations </FooterLink>
        </FooterLinksItems>

        <FooterLinksItems>
            <FooterLinksTitle>Data Transformation</FooterLinksTitle>
            <FooterLink to='/'>Python Pandas GUI</FooterLink>
            <FooterLink to='/'>Add new features</FooterLink>
        </FooterLinksItems>


        </FooterLinksContainer>

        </FooterLinksWrapper>

        <SocialMedia>
          <SocialMediaWrap>
          <SocialLogo to='/'><p>Xn2Y Ai</p></SocialLogo>
          <CollapseWrap id="accordionWrapper" accordion expandIconPosition='end' >
          <Panel header="Contact Us" key="1">
                            <p>dev@x2y.com</p>
                        </Panel>
                        </CollapseWrap>

          <WebsiteRights>Xn2Y Ai Technology Corporation © {new Date().getFullYear()}
                     <p> All rights reserved.</p></WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterWrapper>

    <BackTop/>

    </FooterContainer>
  )
}

export default Footer