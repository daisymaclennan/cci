import Link from 'next/link'
import NavLink from 'next/link'
import { createGlobalStyle } from 'styled-components'
import Content from './content'
import NavBar from './nav-bar'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Blinker';
    src: url('../static/fonts/blinker/Blinker-Regular.ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Blinker';
    src: url('../static/fonts/blinker/Blinker-SemiBold.ttf');
    font-weight: 600;
  }
  body {
    background-color: #FFFFFF;
    font-family: 'Blinker', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h2{
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    line-height: 29px;
    color: #1D1D1D;
  }
  h3{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #1D1D1D;
  }
  h4{
    font-size: 14px;
    color: #52565F;
    line-height: 17px;
  }
  h5{
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }
  h6{
    font-size: 10px;
    line-height: 12px;
    color: #4A4949;
    font-weight: normal;
  }
  p{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #52565F;
  }
  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  button{
    cursor: pointer;
    background-color: #FFFFFF;
  }
  .no-style-button{
    border: 0;
    background-color: #FFFFFF;
  }
  *:focus{
    outline: 0;
  }

  /*Org slug styles*/
  .org__sub-title{
    line-height: 24px;
    letter-spacing: 0.15em;
    margin-top: 40px;
  }

  @media screen and (max-width: 999px){
    .search-blip{
      position: absolute;
      right: 48px;
      bottom: 0;
    }
    .more-blip{
      position: absolute;
      right: 4px;
      bottom: 0;
    }
  }
  @media screen and (min-width: 1000px){
    .search-blip{
      position: absolute;
      right: 58px;
      bottom: 0;
    }
    .more-blip{
      position: absolute;
      right: 13px;
      bottom: 0;
    }
  }
  /*Overlay styles*/
  .discover-hidden > button{
    transform: rotate(180deg);
  }
  @media screen and (min-width: 800px){
    /*Discover overlay styles*/
    .discover-hidden{
      top: calc(100% - 90px);
    }
    .discover-show{
      top: calc(100% - 280px);
    }


  }
  @media screen and (max-width: 799px){
    /*Discover overlay styles*/
    .discover-hidden{
      top: calc(100% - 90px);
    }
    .discover-show{
      top: calc(100% - 250px);
    }
  }
`

const GlobalLayout = ({ children }) => {

return(
  <div>
    <GlobalStyle />
    {children}

  </div>
)}

export default GlobalLayout
