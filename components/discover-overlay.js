import styled from 'styled-components'

const DiscoverOverlay = styled.div`
    background-color: #FFFFFF;
    border-radius: 20px;
    position: fixed;
    height: 600px;
    transition: 2s ease-in-out;
    .open-button{
      background: #0D87FF;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 2s ease-in-out; 
      position: absolute;
      top: -20px;
      left: calc(50% - 20px);
    }
    h2{
      text-align: center;
      padding-top: 20px;
    }
    @media screen and (max-width: 999px){
      width: 100vw;
      left: 0;

    }
    @media screen and (min-width: 1000px){
      width: 360px;
      left: 0;
    }
  }

`


export default DiscoverOverlay
