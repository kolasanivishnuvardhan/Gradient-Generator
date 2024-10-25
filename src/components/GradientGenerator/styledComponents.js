import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background-image:linear-gradient(to ${props => props.direction},${props =>
      props.leftColor},${props => props.rightColor});
`

export const GradientGeneratorMainHeading = styled.h1`
    font-family:"Roboto";
    color:#ffffff;
    font-size:30px;
`

export const GradientGeneratorChooseDirection = styled.p`
    font-family:"Roboto";
    font-size:25px;
    color:#ffffff;
`

export const GradientGeneratorChooseDirectionContainer = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
export const GradientGeneratorChooseColorContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
`
export const GradientGeneratorPickColorsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`
export const LabelPickColor = styled.p`
    font-family:"Roboto";
    font-size:20px;
    color:#ffffff;
`
export const InputPickColor = styled.input`
    width:110px;
    height:50px;
    background-color:transparent;
    border-color:transparent
`
export const GradientGeneratorGenerateBtn = styled.button`
    background-color:#00c9b7;
    color:#1e293b;
    border:1px solid #00c9b7;
    font-family:"Roboto";
    font-size:20px;
    padding:10px 40px 10px 40px; 
    ouline:none;
    cursor:pointer;
    border-radius:8px;
`
