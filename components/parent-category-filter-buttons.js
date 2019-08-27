import styled from 'styled-components'

const ParentCategoryFilterButtons = styled.div`
  h2{
    text-align: center;
    padding-top: 20px;
  }
  .parent-category-box{
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
    padding-right: 10px;
  }
  img{
    width: 40px;
    height: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  label{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  input[type="checkbox"]:checked > div{
    background: #F3F3F3;
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
  .filter{
    height: 70px;
    display: inline-block;
    min-width:70px;
    margin-top: 8px;
    margin-left: 3px;
    margin-right: 3px;
    position: relative;
    margin-bottom: 20px;
  }

  h6{
    margin-top: 5px;
    text-align: center;
  }

`


export default ParentCategoryFilterButtons
