import styled from 'styled-components'

const AdminSideBar = styled.div`
  height: calc(100vh - 60px);
  background-color: #FFFFFF;
  padding-left: 15px;
  h3{
    color: #4A4949;
    letter-spacing: 0.15em;
    margin-left: 20px;
  }
  a{
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 999px){
    width: 430px;
    position: fixed;
    top: 60px;
  }

`



export default AdminSideBar
