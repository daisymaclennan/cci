import styled from 'styled-components'

const MoreOverlay = styled.div`
  background-color: #FFFFFF;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 60px;
  @media screen and (max-width: 999px){
    left: 0;
    .inside{
      padding-left: 10px;
    }
  }
  @media screen and (min-width: 1000px){
    width: 360px;
    right: 0;
    .inside{
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`


export default MoreOverlay
