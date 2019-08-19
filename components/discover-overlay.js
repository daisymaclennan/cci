import styled from 'styled-components'

const DiscoverOverlay = styled.div`
    background-color: #FFFFFF;
    border-radius: 20px;
    position: fixed;
    height: 600px;
    transition: top 2s ease-in-out;
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
    }
    h2{
      text-align: center;
      padding-top: 20px;
    }
    @media screen and (max-width: 800px){
      width: 100vw;
      left: 0;

    }
    @media screen and (min-width: 801px){
      width: 360px;
      left: 0;
    }
    .parent-category-box{
      display: flex;
      flex-wrap: wrap;
      padding-left: 20px;
      padding-right: 20px;
    }
    img{
      width: 40px;
      height: 40px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    label{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    input[type="checkbox"]:checked > div{
      background: #F3F3F3;
    }
    input[type="checkbox"]{
      border: 0;
      clip: rect(1px 1px 1px 1px);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    .filter{
      height: 70px;
      display: inline-block;
      min-width:70px;
      margin-top: 8px;
      margin-left: 3px;
      margin-right: 3px;
      position: relative;
      margin-bottom: 20px;


    }
    h6{
      margin-top: 5px;
      text-align: center;
    }
  }

`


export default DiscoverOverlay
