import styled from 'styled-components'

const OrgBox = styled.div`
  border-top: 2px solid #F5F5F5;
  padding-top: 20px;
  padding-bottom: 20px;
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .background-line{
    width: calc(100vw - 20px);
    //outline: 5px solid red;
    display: block;
  }
  img{
    height: 40px;
  }

`


export default OrgBox
