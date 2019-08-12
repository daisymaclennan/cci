import styled from 'styled-components'

const NavBar = styled.nav`
  position: absolute;
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
  a{
    font-size: 10px;
    text-transform: uppercase;
    color: #52565F;
    text-decoration: none;
    height: 50px;

    position: relative;
    display: flex;

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
    letter-spacing: 0.15em;
  }
  @media screen and (max-width: 999px){
    bottom: 0;
    left: 0;
    height: 80px;
    width: 100vw;

    a{
      flex-direction: column;
    }
  }
  @media screen and (min-width: 1000px){
    top: 0;
    left: 0;
    height: 60px;
    width: 100vw;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    a{
      justify-content: space-around;
    }
    svg{
      margin-top: auto;
      margin-bottom: auto;
      margin-right: 15px;
    }
    h3{
      margin-top: auto;
      margin-bottom: auto;
    }
  }

`


export default NavBar
