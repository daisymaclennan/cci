import styled from 'styled-components'

const PrimaryButton = styled.div`
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
    svg{
      fill: #FFFFFF;
      margin-left: 10px;

    }
    @media screen and (max-width: 999px){
    }

  }

`


export default PrimaryButton
