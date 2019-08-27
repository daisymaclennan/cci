import styled from 'styled-components'

const OrgCategoryHorizontal = styled.div`
    padding-left: 0;
    list-style: none;
    position: relative;

    a{
      display: flex;
      align-items: center;
    }
    h3{
      letter-spacing: 0.15em;
      margin-left: 10px;
      color: #4A4949;
    }
    .arrow{
      margin-left: auto;
      height: 16px;
    }
    img{
      width: 24px;
    }
    @media screen and (min-width: 801px){
      .arrow{
        display: none;
      }
    }
    @media screen and (max-width: 800px){
      .cat-blip{
        display: none;
      }
    }
    .cat-blip{
      position: absolute;
      right: -15px;
      z-index: 3;
    }
    .active-cat{
      display: block;
    }
    .inactive-cat{
      display: none;
    }
`


export default OrgCategoryHorizontal
