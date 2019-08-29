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
    overflow: hidden;
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

  /*Leaflet map style*/
  .leaflet-container{
    height: 100vh;
    z-index: 0;
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
  /*Hides default checkboxes from view*/
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

  /*DiscoverOverlay styles*/
  @media screen and (min-width: 800px){
    body{
        background-color: #F9F9F9;
        overflow: hidden;
    }
    .discoverClosed{
      top: calc(100% - 90px);
    }
    .discoverHalfway{
      top: calc(100% - 280px);
    }
    .discoverOpen{
      top: 140px;
    }
    /*Leaflet map styles*/
    .leaflet-container{
      left: -8px;
      width: 100vw;
      top: 0px;
    }
  }

  @media screen and (max-width: 799px){
    .discoverClosed{
      top: calc(100% - 90px);
    }
    .discoverHalfway{
      top: calc(100% - 250px);
    }
    .discoverOpen{
      top: 160px;
    }

    /*Leaflet map styles*/
    .leaflet-container{
      left: -10px;

      width: 100vw;
      top: -10px;
    }
  }

`

const GlobalLayout = ({ children }) => {

return(
  <div>
    <GlobalStyle />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
    {children}
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
     integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
     crossorigin=""></script>
  </div>

)}

export default GlobalLayout
