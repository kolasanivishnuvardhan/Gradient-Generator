import {
  GradientDirectionChooseItem,
  GradientGeneratorDirection,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, selectedDirection, onClickDirectionBtn} = props
  const {directionId, value, displayText} = details

  const onClickchangeDirectionBtn = () => {
    onClickDirectionBtn(value)
  }

  return (
    <GradientDirectionChooseItem>
      <GradientGeneratorDirection
        type="button"
        key={directionId}
        selectedDirection={selectedDirection}
        onClick={onClickchangeDirectionBtn}
        presentDirection={value}
      >
        {displayText}
      </GradientGeneratorDirection>
    </GradientDirectionChooseItem>
  )
}

export default GradientDirectionItem
