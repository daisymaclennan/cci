import styled from 'styled-components'

const Carousel = styled.div`
  .carousel {
    overflow: hidden;
    width: calc(100vw - 20px);
    margin-top: 14px;
    margin-bottom: 14px;
  }

  .carousel-item-container {
    display: flex;
    will-change: transform;
    margin-left: -14px;
  }

  .carousel-item {
    position: relative;
    flex: 0 0 auto;
    width: 40%;
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

`


export default Carousel
