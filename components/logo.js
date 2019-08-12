import styled from 'styled-components'

const Logo = styled.h1`
  svg{
    height: 24px;
    position: absolute;
    top: 20px;
  }
  @media screen and (max-width: 1000px){
    svg{ 
      left: 10px;
    }
  }
  @media screen and (min-width: 1000px){
    svg{
      left: 50px;
    }
  }

`


export default Logo
