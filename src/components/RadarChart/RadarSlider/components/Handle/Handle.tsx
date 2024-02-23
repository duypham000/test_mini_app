import { RotationGroup, Group, Fill, Stroke, Arrows, WhiteDot } from './styled'
import React from 'react'

/** Optimisation: we don't want this to re-render. */
const HandleGraphics: React.FC = () => (
  <>
    <Fill cx='14.5' cy='13.8333' r='13.8333' />
    <Stroke cx='14.5' cy='13.8333' r='13.3333' />
    <Arrows d='M14.4994 9.51038L19.1105 12.9687H9.88831L14.4994 9.51038Z' />
    <Arrows d='M9.88831 14.6979H19.1105L14.4994 18.1562L9.88831 14.6979Z' />
    <WhiteDot cx='14.5' cy='27.6666' r='2' />
  </>
)

const MemoHandleGraphics = React.memo(HandleGraphics)

export interface Props {
  index: number
  point: number
  downHandler?: (type: 'mouse' | 'touch') => void
  touchEnd?: () => void
}

const angles = [0, 72, 144, 216, 288] // angle rotation
const yPositions = [33.4, 28, 22, 16, 11, 5, 0] // percentage
const Handle: React.FC<Props> = ({ index, point, downHandler, touchEnd }) => {
  return (
    <RotationGroup
      id={`container-${index}`}
      angle={angles[index]}
      onMouseDown={() => {
        downHandler && downHandler('mouse')
      }}
      onTouchStart={() => {
        downHandler && downHandler('touch')
      }}
      onTouchEnd={touchEnd}
    >
      <Group id={`handle-${index}`} yPosition={yPositions[point - 1]}>
        <MemoHandleGraphics />
      </Group>
    </RotationGroup>
  )
}

export default Handle
