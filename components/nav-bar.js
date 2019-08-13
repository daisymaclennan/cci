import styled from 'styled-components'

const NavBar = styled.div`
  width: 100vw;
  height: 60px;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #FFFFFF;
  z-index: 1;
  .logo{
    margin-right: auto;
  }
  @media screen and (max-width: 999px){
    .logo{
      margin-left: 10px;
    }
    .elipsis{
      margin-right: 10px;
    }
    .search{
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 1000px){
    .logo{
      margin-left: 50px;
    }
    .elipsis{
      margin-right: 50px;
    }
    .search{
      margin-right: 20px;
    }
  }

`

export default NavBar
