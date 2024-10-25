import styled from 'styled-components'
export const GradientDirectionChooseItem = styled.li`
    list-style-type:none;    
`
export const GradientGeneratorDirection = styled.button`
    font-family:"Roboto";
    font-size:20px;
    color:#1e293b;
    background-color:#ffffff79;
    border:1px solid  #ffffff79;
    border-radius:8px;
    outline:none;
    cursor:pointer;
    padding:10px 40px 10px 40px;
    margin:10px;
    opacity:${props =>
      props.presentDirection === props.selectedDirection ? '1' : '0.5'};
`
