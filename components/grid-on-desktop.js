import styled from 'styled-components'

const GridOnDesktop = styled.div`
  @media screen and (min-width: 1450px) and (max-width: 1950px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1450px){
    display: grid;
    grid-column-gap: 40px;
  }

  @media screen and (min-width: 1951px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`


export default GridOnDesktop
