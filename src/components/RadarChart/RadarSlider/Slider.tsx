import { SvgContainer } from './styled'
import Handle from './components/Handle'
import React from 'react'

interface Props {
  selectedIndex?: number
  points: number[]
  dimension?: number
  onChange?: (newPoints: number[]) => void
}

const MemoHandle = React.memo(
  Handle,
  (prevProps, nextProps) => prevProps.point === nextProps.point
)

/**
 * Max: 7
 * Min: 1
 */
const snowflakeMinMax = (value: number) => Math.min(6, Math.max(1, value))

const calculatePoints = (
  clientX: number,
  clientY: number,
  containerX: number,
  containerY: number,
  centerX: number,
  centerY: number,
  points: number[],
  targetPoint: number
) => {
  const relativeX = clientX - containerX
  const relativeY = clientY - containerY

  // Distance of the mouse from the center
  const distance = Math.sqrt(
    Math.pow(centerX - relativeX, 2) + Math.pow(centerY - relativeY, 2)
  )
  const offset = centerX * 0.265
  const point = centerX * 0.075
  const newPoint = snowflakeMinMax(Math.round((distance - offset) / point))
  const currentPoints = points.slice()
  currentPoints[targetPoint] = newPoint
  return currentPoints
}

const Slider: React.FC<Props> = ({ points, dimension, onChange }) => {
  //const [hideScroll, setHideScroll] = React.useState(false);
  const [draggingHandle, setDraggingHandle] = React.useState(0)
  const isIdle = draggingHandle === 0
  //usePreventWindowScroll(hideScroll);
  const documentMouseUpHandler = () => {
    setDraggingHandle(0)
    //setHideScroll(false);
  }
  React.useEffect(() => {
    if (!isIdle) {
      document.addEventListener('mouseup', documentMouseUpHandler)
    } else {
      document.removeEventListener('mouseup', documentMouseUpHandler)
    }
    return function cleanUp() {
      document.removeEventListener('mouseup', documentMouseUpHandler)
    }
  }, [isIdle])
  const touchMoveHandler = (e: React.TouchEvent<SVGSVGElement>) => {
    if (draggingHandle !== 0) {
      const container = e.currentTarget
      const bound = container.getBoundingClientRect()
      const centerX = bound.width / 2
      const centerY = bound.height / 2
      const currentPoints = calculatePoints(
        e.touches[0].clientX,
        e.touches[0].clientY,
        bound.left,
        bound.top,
        centerX,
        centerY,
        points,
        draggingHandle - 1
      )
      onChange && onChange(currentPoints)
    }
  }
  const mouseMoveHandler = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (draggingHandle !== 0) {
      const container = e.currentTarget
      const bound = container.getBoundingClientRect()
      const centerX = bound.width / 2
      const centerY = bound.height / 2
      const currentPoints = calculatePoints(
        e.clientX,
        e.clientY,
        bound.left,
        bound.top,
        centerX,
        centerY,
        points,
        draggingHandle - 1
      )
      onChange && onChange(currentPoints)
    }
  }
  return (
    <SvgContainer
      width={dimension}
      height={dimension}
      viewBox='0 0 255 255'
      xmlns='http://www.w3.org/2000/svg'
      onMouseMove={mouseMoveHandler}
      onTouchMove={touchMoveHandler}
      onMouseUp={() => setDraggingHandle(0)}
    >
      {points.map((point, index) => (
        <MemoHandle
          key={index}
          index={index}
          point={point}
          downHandler={(type) => {
            if (type === 'touch') {
              //setHideScroll(true);
            }
            setDraggingHandle(index + 1)
          }}
          touchEnd={() => {
            //setHideScroll(false);
            setDraggingHandle(0)
          }}
        />
      ))}
    </SvgContainer>
  )
}

export default Slider
