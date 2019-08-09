import styled from 'styled-components'

const NavBar = styled.nav`
  box-shadow: 0px -4px 8px rgba(29, 29, 29, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  div{
    display: flex;
    justify-content: space-between;
    width: 320px;
    height: 50px;
  }
  @media screen and (max-width: 1000px){
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80px;
    width: 100vw;
  }
  a{
    font-size: 10px;
    text-transform: uppercase;
    color: #52565F;
    text-decoration: none;
    height: 50px;
    width: 60px;
    vertical-align: center;
    position: relative;
  }
  svg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 16px;
    fill: #52565F;
  }
  h3{
    text-align: center;
    display: block;
    margin-bottom: 0;
  }

`


export default NavBar
