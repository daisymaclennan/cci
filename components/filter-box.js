import styled from 'styled-components'

const FilterBox = styled.div`
  margin-bottom: 20px;
  label{
    background: #F3F3F3;
    border-radius: 5px;
    height: 32px;
    padding: 8px;
    margin-right: 10px;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #4A4949;
    transition: 0.25s ease-in-out;
  }
  input[type="checkbox"]{
    border: 0;
    clip: rect(1px 1px 1px 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  input[type="checkbox"]:checked ~ label{
    background: #0D87FF;
    color: #FFFFFF;
  }

`



export default FilterBox
