import styled from 'styled-components'

const PrimaryButton = styled.a`
    display: flex;
    color: white;
    background: #0D87FF;
    border-radius: 50px;
    height: 50px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    width: 200px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    svg{
      fill: #FFFFFF;
      margin-left: 10px;

    }
    @media screen and (max-width: 999px){
      position: fixed;
      bottom: 20px;
      left: calc(50% - 100px)
    }

`


export default PrimaryButton
