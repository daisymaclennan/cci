import styled from 'styled-components'

const SideBar = styled.div`
  ${props => props.alwaysVisible && `
    display: block;
    `}
  ${props => props.visibleOnMobile && `
    @media screen and (min-width: 801px){
      display: none;
    }`}
  ${props => props.visibleOnDesktop && `
    @media screen and (max-width: 800px){
      display: none;
    }`}
    background: #FFFFFF;
    @media screen and (min-width: 801px){
      height: calc(100vh - 60px);
      background-color: #FFFFFF;
      padding-left: 15px;
      padding-right: 15px;
      width: 320px;
      position: fixed;
      top: 60px;
      left: 0;
    }

`


export default SideBar
