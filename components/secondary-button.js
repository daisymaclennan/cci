import styled from 'styled-components'

const SecondaryButton = styled.a`
    display: flex;
    color: #52565F;
    background: #FFFFFF;
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
    border: 1px solid #EEEEEE;
    z-index: 2;
    svg{
      stroke: #52565F;
      margin-right: 10px;
      height: 12px;
    }
    position: absolute;
    left: calc(50% - 100px);

    @media screen and (max-width: 999px){
      top: 70px;
    }
    @media screen and (min-width: 1000px){
      top: 80px;
    }

  }

`


export default SecondaryButton
