import styled from 'styled-components'

const DiscoverOverlay = styled.div`
    background-color: #FFFFFF;
    border-radius: 20px 20px 0px 0px;
    position: fixed;
    bottom: -10;
    transition: 2s ease-in-out;
    z-index: 1;
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
      transform: rotate(180deg);
    }
    h2{
      color: #1D1D1D;
    }
    h3{
      padding-left: 20px;
      color: #4A4949;
      letter-spacing: 0.15em;
    }
    .categories-top-bar{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
    }
    .discover-hidden > button{
      transform: rotate(180deg);
    }
    .categories-content{
      width: calc(100% - 30px);
      margin-left: auto;
      margin-right: auto;
      overflow-y: scroll;
    }
    .parent-category{
      display: flex;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .parent-category img{
      width: 24px;
    }
    .single-category{
      border-bottom: 1px solid #F5F5F5;
    }
    .child-categories{
      padding-left: 45px;
      color: #4A4949;
    }
    .child-categories > h3{
      padding-bottom: 20px;
    }
    p:first-of-type{
      margin-top: 0;
    }
    .categories{
      height: -webkit-fill-available;
      overflow-y: scroll;
    }

    @media screen and (min-width: 800px){
      width: 360px;
      left: 0;
    }

    @media screen and (max-width: 799px){
      width: 100vw;
      left: 0;
    }
`


export default DiscoverOverlay
