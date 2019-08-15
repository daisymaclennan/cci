import styled from 'styled-components'

const TertiaryButton = styled.a`
    display: flex;
    color:  #0D87FF;
    background: #F5F5F5;
    border-radius: 50px;
    height: 50px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      fill: #0D87FF;
      margin-left: 10px;
      height: 12px;
    }
    @media screen and (max-width: 999px){
    }
    @media screen and (min-width: 1000px){
      position: fixed;
      left: calc(50% - 100px);
      top: 90px;
    }

  }

`


export default TertiaryButton
