import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  GradientGeneratorMainHeading,
  GradientGeneratorChooseDirection,
  GradientGeneratorChooseDirectionContainer,
  GradientGeneratorChooseColorContainer,
  GradientGeneratorPickColorsContainer,
  LabelPickColor,
  InputPickColor,
  GradientGeneratorGenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    selectedDirection: gradientDirectionsList[0].value,
    InputLeftColor: '#8ae323',
    InputRightColor: '#014f7b',
    direction: gradientDirectionsList[0].value,
    leftColor: '#8ae323',
    rightColor: '#014f7b',
  }

  onClickGenerateBtn = () => {
    const {
      selectedDirection,
      InputLeftColor,
      InputRightColor,
      isButtonClicked,
    } = this.state

    this.setState({
      direction: selectedDirection,
      leftColor: InputLeftColor,
      rightColor: InputRightColor,
    })
  }

  onClickDirectionBtn = value => {
    this.setState({
      selectedDirection: value,
    })
  }

  onChangeLeftColor = event => {
    this.setState({InputLeftColor: event.target.value})
  }

  onChangeRightColor = event => {
    this.setState({InputRightColor: event.target.value})
  }

  render() {
    const {
      direction,
      leftColor,
      rightColor,
      InputLeftColor,
      InputRightColor,
      selectedDirection,
    } = this.state

    return (
      <GradientGeneratorContainer
        direction={direction}
        leftColor={leftColor}
        rightColor={rightColor}
        data-testid="gradientGenerator"
      >
        <GradientGeneratorMainHeading>
          Generate a CSS Color Gradient
        </GradientGeneratorMainHeading>
        <GradientGeneratorChooseDirection>
          Choose Direction
        </GradientGeneratorChooseDirection>
        <GradientGeneratorChooseDirectionContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              details={eachDirection}
              key={eachDirection.directionId}
              onClickDirectionBtn={this.onClickDirectionBtn}
              selectedDirection={selectedDirection}
            />
          ))}
        </GradientGeneratorChooseDirectionContainer>
        <GradientGeneratorChooseDirection>
          Pick the Colors
        </GradientGeneratorChooseDirection>
        <GradientGeneratorChooseColorContainer>
          <GradientGeneratorPickColorsContainer>
            <LabelPickColor htmlFor="leftColor">
              {InputLeftColor}
            </LabelPickColor>
            <InputPickColor
              type="color"
              id="leftColor"
              value={InputLeftColor}
              onChange={this.onChangeLeftColor}
            />
          </GradientGeneratorPickColorsContainer>
          <GradientGeneratorPickColorsContainer>
            <LabelPickColor htmlFor="rightColor">
              {InputRightColor}
            </LabelPickColor>
            <InputPickColor
              type="color"
              id="rightColor"
              value={InputRightColor}
              onChange={this.onChangeRightColor}
            />
          </GradientGeneratorPickColorsContainer>
        </GradientGeneratorChooseColorContainer>
        <GradientGeneratorGenerateBtn
          type="button"
          onClick={this.onClickGenerateBtn}
        >
          Generate
        </GradientGeneratorGenerateBtn>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
