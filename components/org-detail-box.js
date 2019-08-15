import styled from 'styled-components'

const OrgDetailBox = styled.div`
    background: #F4F4F4;
    border-radius: 10px;
    display: grid;
    grid-template-columns: calc(45% -5px) calc(45% -5px);
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
    p{
      border-bottom: 1px solid #0D87FF;
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
    }


  }

`


export default OrgDetailBox
