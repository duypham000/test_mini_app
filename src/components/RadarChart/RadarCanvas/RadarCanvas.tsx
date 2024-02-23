import calculateMidColor, { hexToRgbA } from '../colors-utils'
import { SnowflakeCanvasWrapper } from './styled'
import React from 'react'
import Labels from '../RadarLabels'
import { colors } from '@/themes/colors'

const MemoLabels = React.memo(Labels)

interface SnowflakeCanvasProps {
  dark?: boolean
  width?: number
  light?: boolean
  isDark?: boolean
  points: any[]
  disabled?: boolean
  disableLabel?: boolean
}

interface State {
  canvasWidth: number
}

interface Point {
  x: number
  y: number
}

const flakeMaxColour = '#00e613'
const flakeMinColour = '#FF2B2B'

const color = {
  brand01: '#02ABDE',
  brand01RGB: '2,171,222',
  brand02: '#43C1EE',
  brand02RGB: '67,193,238',
  brand03: '#0D6EF1',
  brand03RGB: '13,110,241',
  brand04: '#D4F1FC',
  brand04RGB: '212,241,252',
  black: '#000000',
  blackRGB: '0,0,0',
  almostBlack: '#0B0E13',
  almostBlackRGB: '11,14,19',
  darkGray: '#242526', //"#5F6875",
  darkGrayRGB: '95,104,117',
  darkerGray: '#242526', //"#3E4855",
  darkerGrayRGB: '62,72,85',
  mediumGray: '#8C929B',
  mediumGrayRGB: '140,146,155',
  lightGray: '#C9CBCF',
  lightGrayRGB: '201,203,207',
  paper: '#F2F2F3',
  paperRGB: '242,242,243',
  charcoal: '#151B24',
  charcoalRGB: '21,27,36',

  spaceGray: '#313233', //"#262E3A",

  spaceGray2: '#3e3f40', //"#262E3A",
  spaceGray3: '#4f5052', //"#262E3A",
  spaceGrayRGB: '38,46,58',
  noir: '#1B222D',
  noirRGB: '27,34,45',
  white: '#FFFFFF',
  whiteRGB: '255,255,255',
  paleWhite: '#EAF4FF',
  paleWhiteRGB: '234,244,255',
  snowflakeRingEven: '#2D3642',
  snowflakeRingEvenRGB: '45,54,66',

  showflakeRingOdd: '#424B58',

  showflakeRingOddRGB: '66,75,88',
  info: {
    lighter: '#EAF4FF',
    light: '#5CBAEA',
    primary: '#2F80ED',
    secondary: '#2a73d5',
    saturated: '#00A9FF'
  }
}

class RadarCanvas extends React.PureComponent<SnowflakeCanvasProps, State> {
  static defaultProps = {
    dark: false,
    light: false,
    disabled: false,
    disableLabel: false
  }

  private widthRatio = 0.7766785714
  private canvas: React.RefObject<HTMLCanvasElement>
  private container: React.RefObject<HTMLDivElement>

  state = {
    canvasWidth: 0
  }

  constructor(props: any) {
    super(props)
    this.canvas = React.createRef<HTMLCanvasElement>()
    this.container = React.createRef<HTMLDivElement>()
  }

  componentDidMount() {
    const { setCanvasWidthAndPaint } = this
    try {
      window.addEventListener('resize', setCanvasWidthAndPaint)
    } catch (error) {
      console.log(error)
    }
    setCanvasWidthAndPaint()
  }

  componentWillUnmount() {
    const { setCanvasWidthAndPaint } = this

    window.removeEventListener('resize', setCanvasWidthAndPaint)
  }

  componentDidUpdate() {
    const { paintCanvas } = this
    paintCanvas()
  }

  setCanvasWidthAndPaint = () => {
    const {
      container: { current: container }
    } = this
    const { width } = this.props
    const { canvasWidth } = this.state

    if (container === null) return false
    if (width === undefined && canvasWidth === container.offsetWidth)
      return false
    this.setState({
      canvasWidth:
        (width !== undefined && width > 0 ? width : container.offsetWidth) * 2
    })
  }

  // Calculates the bezier control points for segment (x1,y1)-(x2,y2)
  calculateControlPoints = (
    x0: any,
    y0: any,
    x1: any,
    y1: any,
    x2: any,
    y2: any,
    x3: any,
    y3: any,
    tensor: any
  ) => {
    const len1: number = Math.sqrt(
      (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0)
    )
    const len2: number = Math.sqrt(
      (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
    )
    const len3: number = Math.sqrt(
      (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)
    )

    const k1: number = len1 / (len1 + len2)
    const k2: number = len2 / (len2 + len3)

    const xc1: number = (x0 + x1) / 2.0
    const yc1: number = (y0 + y1) / 2.0
    const xc2: number = (x1 + x2) / 2.0
    const yc2: number = (y1 + y2) / 2.0
    const xc3: number = (x2 + x3) / 2.0
    const yc3: number = (y2 + y3) / 2.0

    const xm1: number = xc1 + (xc2 - xc1) * k1
    const ym1: number = yc1 + (yc2 - yc1) * k1

    const xm2: number = xc2 + (xc3 - xc2) * k2
    const ym2: number = yc2 + (yc3 - yc2) * k2

    const cx1: number = xm1 + (xc2 - xm1) * tensor + x1 - xm1
    const cy1: number = ym1 + (yc2 - ym1) * tensor + y1 - ym1

    const cx2: number = xm2 + (xc2 - xm2) * tensor + x2 - xm2
    const cy2: number = ym2 + (yc2 - ym2) * tensor + y2 - ym2

    return [cx1, cy1, cx2, cy2] as number[]
  }

  bullsEyeFill = (isEven: boolean) => {
    const {
      //theme: { color },
      dark,
      light,
      disableLabel,
      isDark
    } = this.props

    /**
     * Temporary hardcode for even and odd rings colours until a better
     * design can be achieve by changing chart implementation
     */

    if (isEven) {
      if (disableLabel) {
        return isDark ? color.darkerGray : colors.black200
      } else {
        return light || dark
          ? isDark
            ? color.darkerGray
            : colors.black200
          : color.snowflakeRingEven
      }
    } else {
      if (disableLabel) {
        return isDark ? color.spaceGray : colors.white_dark400
      } else {
        if (light) {
          return 'white'
        } else {
          /*return dark ? color.darkerGray : color.showflakeRingOdd;*/
          return dark
            ? isDark
              ? color.spaceGray
              : colors.white_dark400
            : color.showflakeRingOdd
        }
      }
    }
  }

  paintCanvas = () => {
    const {
      canvas: { current: canvas },
      calculateControlPoints,
      widthRatio,
      bullsEyeFill
    } = this
    const {
      points = [1, 1, 1, 1, 1],
      //theme: { flakeMinColour, flakeMaxColour, color },
      dark,
      light,
      disabled,
      disableLabel,
      isDark
    } = this.props

    const ctx = canvas && canvas.getContext('2d')
    if (canvas && ctx && points) {
      const width = canvas.width
      const height = canvas.height
      const axisLineWidth = 3 / 280
      const PI = Math.PI
      const diameter = width * (disableLabel ? 0.95 : widthRatio)
      const arr: Point[] = []
      const nodeCount = points.length
      const maxSum = 25
      const minSum = 5
      const sum: number = points.reduce((a, b) => +a + (+b - 1), 0)
      const colour = 1 - (sum - minSum) / (maxSum - minSum)
      // null check;
      if (nodeCount === 0) return
      let max = 6
      let flakeColorValue = 0
      //
      flakeColorValue = Math.max(colour, 0)
      flakeColorValue = Math.min(colour, 1)
      //
      for (let i = 0; i < nodeCount; i++) {
        max = Math.max(max, points[i])
      }
      //
      for (let i = 0; i < nodeCount; i++) {
        const radius = ((diameter / 2) * points[i]) / max
        const angle = -PI / 2 + ((2 * PI) / nodeCount) * i
        const x = width / 2 + Math.cos(angle) * radius
        const y = width / 2 + Math.sin(angle) * radius
        arr.push({ x: x, y: y })
      }
      //
      ctx.clearRect(0, 0, width, height)
      //
      ctx.translate(0, 0)
      //	Draw background arc
      // ctx.beginPath();
      // ctx.fillStyle = '#27313D';
      // ctx.arc(width / 2, height / 2, width / 2 - 4, 0, 2 * PI);
      // ctx.fill();
      //	Draw bullseye arcs
      for (let i = max; i > 1; i--) {
        ctx.beginPath()
        ctx.fillStyle = bullsEyeFill(i % 2 !== 0)
        ctx.arc(width / 2, height / 2, (i / max) * (diameter / 2), 0, 2 * PI)
        ctx.fill()
      }

      //	Draw axis lines
      for (let i = 5; i > 0; i--) {
        const radius = diameter / 2
        const angle = -PI / 2 + ((2 * PI) / nodeCount) * i
        const x = width / 2 + Math.cos(angle) * radius
        const y = width / 2 + Math.sin(angle) * radius
        ctx.beginPath()
        ctx.strokeStyle = light
          ? 'white'
          : dark
            ? disableLabel
              ? color.spaceGray3
              : isDark
                ? color.spaceGray2
                : colors.black_opacity5
            : color.showflakeRingOdd
        ctx.lineWidth = width * axisLineWidth
        ctx.moveTo(width / 2, height / 2)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
      //	Draw blob
      ctx.beginPath()
      ctx.strokeStyle = disabled
        ? hexToRgbA(color.info.primary, 0.8)
        : calculateMidColor(flakeMaxColour, flakeMinColour, flakeColorValue, 1)
      ctx.fillStyle = disabled
        ? hexToRgbA(color.brand01, 0.5)
        : calculateMidColor(
            flakeMaxColour,
            flakeMinColour,
            flakeColorValue,
            0.7
          )
      ctx.lineWidth = 4
      ctx.moveTo(arr[0].x, arr[0].y)
      let bezier
      let x0, y0, x1, y1, x2, y2, x3, y3
      for (let i = 0; i < nodeCount; i++) {
        x0 = arr[(i - 1 + nodeCount) % nodeCount].x
        y0 = arr[(i - 1 + nodeCount) % nodeCount].y
        x1 = arr[i].x
        y1 = arr[i].y
        x2 = arr[(i + 1) % nodeCount].x
        y2 = arr[(i + 1) % nodeCount].y
        x3 = arr[(i + 2) % nodeCount].x
        y3 = arr[(i + 2) % nodeCount].y
        bezier = calculateControlPoints(x0, y0, x1, y1, x2, y2, x3, y3, 1)
        ctx.bezierCurveTo(
          bezier[0],
          bezier[1],
          bezier[2],
          bezier[3],
          arr[(i + 1) % nodeCount].x,
          arr[(i + 1) % nodeCount].y
        )
      }
      ctx.fill()
      ctx.stroke()
      //	Draw labels or dots
      /*if (disableLabel) {
        for (let i = 0; i < nodeCount; i++) {
          const radius = diameter / 2;
          const angle = -PI / 2 + ((2 * PI) / nodeCount) * i;
          const x = width / 2 + Math.cos(angle) * radius;
          const y = width / 2 + Math.sin(angle) * radius;
          ctx.beginPath();
          ctx.fillStyle = 'white';
          ctx.arc(x, y, 0.02 * width, 0, 2 * PI);
          ctx.fill();
        }
      }*/
      //
      ctx.save()
      ctx.restore()
    }
  }

  render() {
    const { canvas, container } = this
    const { canvasWidth } = this.state
    const { disableLabel } = this.props
    return (
      <SnowflakeCanvasWrapper ref={container}>
        <canvas
          ref={canvas}
          width={canvasWidth}
          height={canvasWidth}
          style={{
            width: `${canvasWidth / 2}px`,
            height: `${canvasWidth / 2}px`
          }}
        />
        {!disableLabel && <MemoLabels dimension={canvasWidth / 2} />}
      </SnowflakeCanvasWrapper>
    )
  }
}

export default RadarCanvas
