import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import { Collapse } from "antd";

export const FooterContainer = styled.footer`
 background-color:#000;

`
export const FooterWrapper = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 max-width:100%;
 margin:0 auto;

 
`
export const FooterLinksWrapper = styled.div`
display:flex;
justify-content:center;
flex-basis:100%;

 @media screen and (max-width:820px) {
     padding-top:32px;
 }
`

//add column funtion on mobile
export const FooterLinksContainer = styled.div`
display:flex;

@media screen and (max-width:820px) {
    flex-direction:column;
}
`

export const FooterLinksItems = styled.ul`
display:flex;
 flex-direction:column;
 align-items:center;
 margin:16px;
 text-align:center;
 width:240px;
 box-sizing:border-box;

 
 @media screen and (max-width:1000px) {
     width:160px;
 }

 @media screen and (max-width:420px) {
     margin:0;
     padding:24px;
     width:100%;
 }
`
export const FooterLinksTitle = styled.h1`
margin-bottom:16px;
 color:#66C3FF;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 font-size:17px;
 font-weight:400;
`
export const FooterLink = styled(LinkR)`
 color:#fff;
 text-decoration:none;
 margin-bottom:0.5rem;

 font-size:14px;
 font-family:"Roboto","Helvetica Neue",sans-serif;

 &:hover {
     color:#66C3FF;
     transition:0.3s ease-out;
 }
`

export const SocialMedia = styled.section`
 max-width:1000px;
 width:100%;
`
export const SocialMediaWrap = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 max-width:1100px;
 margin: 40px auto 0 auto;

 @media screen and (max-width:820px) {
     flex-direction:column;
 }
`
export const SocialLogo = styled(LinkR)`
 color:#66C3FF;
 justify-self:start;
 cursor:pointer;
 text-decoration:none;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 font-weight:bold;
 `
export const WebsiteRights = styled.small`
 color:#66C3FF;
 font-weight:600;

`
export const SocialIcons = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:240px;
`
export const SocialIconLink = styled.a`
 color:#66C3FF;
 font-size:24px;
`

export const Img = styled.img`  
    height:60px;
    width:60px;
    object-fit: contain;
    border-radius: 4px;

    @media screen and (max-width:960px) {
    padding:0px 0px 32px ;
}

`

export const CollapseWrap = styled(Collapse)`
font-size:16px;
background-color:#66C3FF;;
margin-bottom:8px;

`
