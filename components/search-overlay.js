import styled from 'styled-components'

const SearchOverlay = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    top: 60px;
    z-index: 1;

    input{
      background: #F5F5F5;
      /* small drop */
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: 0px 0px 20px 20px;
      height: 50px;
      font-weight: 600;
      font-size: 14px;
      border: 0;
      width: calc(100% - 80px);
      padding-left:40px;
      padding-right: 40px;
    }
    svg{
      fill: #52565F;
      transition: 0.1s ease-in;
      position: absolute;
      height: 16px;
    }
    .search-icon--bar{
      left: 16px;
      top: 18px;
      height: 16px;
    }
    .close-icon--bar{
      position: absolute;
      right: 16px;
      top: 18px;
      height: 16px;
    }
    input:focus ~ .search-icon--bar{
      fill: #0D87FF;
    }
    @media screen and (max-width: 800px){
      height: 100vh;
      width: 100vw;
      left: 0;
      .results{
        margin-left: 10px;
        margin-right: 10px;
      }

      .results{
        width: calc(100% - 80px);
        margin-left: auto;
        margin-right: auto;
      }
      h2{
        margin-top: 0;
      }
      h3{
        letter-spacing: 0.2em;
        margin-top: 20px;
      }
      h4{
        margin-top: 15px;
        margin-bottom: 25px;
      }

    }
    @media screen and (min-width: 801px){
      width: 360px;
      right: 0;
      border-radius: 20px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      padding-bottom: 20px;
      .results{
        margin-left: 16px;
        margin-right: 16px;
      }
    }
  }

`


export default SearchOverlay
