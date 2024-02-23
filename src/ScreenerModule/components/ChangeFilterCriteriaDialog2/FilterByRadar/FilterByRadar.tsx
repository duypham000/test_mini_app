import RadarChart from '@/components/RadarChart'
import React from 'react'

interface Props {
  points: number[]
  setPoints: (points: number[]) => void
}

const FilterByRadar: React.FC<Props> = (props): JSX.Element => {
  const { points, setPoints } = props

  return (
    <>
      <div css={{ minHeight: `calc(100vh - 200px)` }}>
        <RadarChart
          dark={true}
          width={275}
          editable={true}
          points={points}
          handleChange={setPoints}
          tooltip={false}
        />
        <div css={{ filter: 'grayscale(100%)' }}>
          <RadarChart
            dark={true}
            width={275}
            editable={true}
            points={points}
            tooltip={false}
          />
        </div>
      </div>
    </>
  )
}

export default FilterByRadar
