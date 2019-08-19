import styled from 'styled-components'

const MoreOverlay = styled.div`
  background-color: #FFFFFF;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 60px;
  z-index: 2;
  .flexbox{
    display: flex;
  }
  .flexbox h3{
    margin-top: 3px;
    letter-spacing: 0.15em;
  }
  .flexbox div{
    padding-left: 10px;
  }
  h4{
    font-weight: normal;
    color: #4A4949;
  }
  @media screen and (max-width: 800px){
    left: 0;
    .inside{
      padding-left: 10px;
    }
  }
  @media screen and (min-width: 801px){
    width: 300px;
    right: 0;
    .inside{
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`


export default MoreOverlay
