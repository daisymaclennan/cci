import styled from 'styled-components'

const OrgDetailBox = styled.div`
    background: #F4F4F4;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-column-gap: 10%;
    grid-template-rows: 1fr 1fr 1fr;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
    svg{
      height: 12px;
      margin-right: 10px;
    }
    div{
      display: flex;
      align-items: center;
      margin-bottom: auto;
    }
    .email{
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .address{
      grid-row-start: 1;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      margin-bottom: auto;
      position: relative;
      padding-left: 20px;
    }
    .underline{
      /*Try one
      background-size: 20px 1em;
      box-shadow: 0 .1em 0 0 #0D87FF;
      box-decoration-break: clone;
      display: inline;*/
      /*Try two
      display: inline;
      box-decoration-break: clone;
      background-repeat: no-repeat;
      background-image: linear-gradient(180deg, #0D87FF, #0D87FF);
      background-position-y: 100%;
      background-size: 100% 1px;*/
    }
    .icon--address{
      position: absolute;
      top: 20px;
      left: 0;
    }
  }

`


export default OrgDetailBox
