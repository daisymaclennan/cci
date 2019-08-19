import styled from 'styled-components'

const Carousel = styled.div`
  .carousel {
    overflow: hidden;
    width: calc(100vw - 20px);
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .carousel-item-container {
    display: flex;
    will-change: transform;
    margin-left: -14px;
  }

  .carousel-item {
    position: relative;
    flex: 0 0 auto;
    width: 43%;
    padding-left: 14px;
  }

  .carousel-item-inner {
    display: block;
  }

  .carousel-item-img {
    display: block;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .navigation{
    display: flex;
  }

  .nav-button{
    border: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
  }
  svg{
    width: 6px;
    height: 16px;
  }
  .prev > svg{
    margin-right: 8px;
  }
  .next > svg{
    margin-left: 8px;
  }
  .dark > svg{
    fill: #1D1D1D;
  }
  .dark{
    color: #1D1D1D;
  }

  .light > svg{
    fill: rgba(29, 29, 29, 0.4);
  }
  .light{
    color: rgba(29, 29, 29, 0.4);
  }

  .slide-track{
    color: #4A4949;
    transition: 0.25s ease-in-out;
    margin-left: 20px;
    margin-right: 20px;
  }

`


export default Carousel
