import styled from 'styled-components'

const PopUpStyle = styled.a`
  font-family: Blinker;
  .tertiary-button{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 799px){
    .leaflet-popup-content{
      //Doesn't have any real effect
      width: 100vw;
      height: auto;
    }
  }

`


export default PopUpStyle
